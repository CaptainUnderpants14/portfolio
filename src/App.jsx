import "./App.css";
import NavBar from "./NavBar.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { useEffect, useRef, useState } from "react";

const THEME_CYCLE = ["light", "dark", "just-kidding"];
const MINIMUM_LOADING_TIME_MS = 800;
const CRITICAL_ASSETS = {
    light: [
        "/navButtons2.svg",
        "/darkTheme.png",
        "/greendot.svg",
        "/Screen3.svg",
        "/Keyboard6.svg",
    ],
    dark: [
        "/navButtons2.svg",
        "/lightTheme.png",
        "/greendot.svg",
        "/screenDark.svg",
        "/keyboardDark.svg",
    ],
    "just-kidding": [
        "/navButtons2.svg",
        "/lightTheme.png",
        "/greendot.svg",
        "/screenDark.svg",
        "/keyboardDark.svg",
    ],
};

const setSpotlightPosition = ({ x, y }) => {
    const root = document.documentElement;
    root.style.setProperty("--jk-x", `${x}px`);
    root.style.setProperty("--jk-y", `${y}px`);
};

const preloadImage = (src) =>
    new Promise((resolve) => {
        const image = new Image();
        image.decoding = "async";
        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
    });

const waitForFonts = () => document.fonts?.ready ?? Promise.resolve();
const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

const LoadingScreen = ({ progress }) => {
    return (
        <div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
            role="status"
            aria-live="polite"
            aria-label={`Loading portfolio: ${progress}%`}
        >
            <img src="ServerArt.svg" 
                className="w-26"
                alt="Server Art" />
            <div className="font-pixelb text-xl">{`Putting Coal in the Server... ${progress}%`}</div>
        </div>
    );
};

function App() {
    const getInitialTheme = () => {
        const preloadedTheme = document.documentElement.dataset.theme;
        if (THEME_CYCLE.includes(preloadedTheme)) return preloadedTheme;

        const savedTheme = localStorage.getItem("theme");
        if (THEME_CYCLE.includes(savedTheme)) return savedTheme;

        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const initialThemeRef = useRef(theme);
    const isDarkTheme = theme !== "light";
    const isJustKidding = theme === "just-kidding";
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", isDarkTheme);
        root.dataset.theme = theme;
        root.style.colorScheme = isDarkTheme ? "dark" : "light";
        localStorage.setItem("theme", theme);
    }, [theme, isDarkTheme]);

    useEffect(() => {
        document.body.style.overflow = isLoading ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isLoading]);

    useEffect(() => {
        let isCancelled = false;

        const loadExperience = async () => {
            const startedAt = performance.now();
            const assets = CRITICAL_ASSETS[initialThemeRef.current] ?? CRITICAL_ASSETS.light;
            const tasks = [waitForFonts(), ...assets.map(preloadImage)];
            let completedTasks = 0;

            setLoadingProgress(8);

            await Promise.all(
                tasks.map((task) =>
                    Promise.resolve(task)
                        .catch(() => undefined)
                        .finally(() => {
                            completedTasks += 1;

                            if (isCancelled) return;

                            const nextProgress = Math.max(
                                8,
                                Math.round((completedTasks / tasks.length) * 100),
                            );
                            setLoadingProgress(nextProgress);
                        }),
                ),
            );

            const elapsed = performance.now() - startedAt;
            if (elapsed < MINIMUM_LOADING_TIME_MS) {
                await wait(MINIMUM_LOADING_TIME_MS - elapsed);
            }

            if (isCancelled) return;

            setLoadingProgress(100);
            setIsLoading(false);
        };

        loadExperience();

        return () => {
            isCancelled = true;
        };
    }, []);

    useEffect(() => {
        const updateSpotlight = (event) => {
            setSpotlightPosition({ x: event.clientX, y: event.clientY });
        };

        if (!isJustKidding) return undefined;

        window.addEventListener("pointermove", updateSpotlight);
        window.addEventListener("pointerdown", updateSpotlight);

        return () => {
            window.removeEventListener("pointermove", updateSpotlight);
            window.removeEventListener("pointerdown", updateSpotlight);
        };
    }, [isJustKidding]);

    const cycleTheme = (event) => {
        if (event) {
            const { clientX, clientY, currentTarget } = event;
            const hasPointerCoordinates = clientX !== 0 || clientY !== 0;

            if (hasPointerCoordinates) {
                setSpotlightPosition({ x: clientX, y: clientY });
            } else if (currentTarget) {
                const rect = currentTarget.getBoundingClientRect();
                setSpotlightPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                });
            }
        }

        setTheme((currentTheme) => {
            const currentIndex = THEME_CYCLE.indexOf(currentTheme);
            const nextIndex = (currentIndex + 1) % THEME_CYCLE.length;
            return THEME_CYCLE[nextIndex];
        });
    };

    return (
        <>
        {/* <LoadingByMe></LoadingByMe> */}
            {isLoading && (
                <LoadingScreen
                    progress={loadingProgress}
                />
            )}
            <div className={`transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                <NavBar theme={theme} cycleTheme={cycleTheme}/>
                <main aria-busy={isLoading}>
                    <AboutMe/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </main>
            </div>
            {isJustKidding && (
                <div className="just-kidding-overlay" aria-hidden="true">
                </div>
            )}
        </>
    );
}

export default App;
