import "./App.css";
import NavBar from "./NavBar.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { useEffect, useState } from "react";

const THEME_CYCLE = ["light", "dark", "just-kidding"];

const setSpotlightPosition = ({ x, y }) => {
    const root = document.documentElement;
    root.style.setProperty("--jk-x", `${x}px`);
    root.style.setProperty("--jk-y", `${y}px`);
};

function App() {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (THEME_CYCLE.includes(savedTheme)) return savedTheme;

        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const isDarkTheme = theme !== "light";
    const isJustKidding = theme === "just-kidding";

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", isDarkTheme);
        root.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme, isDarkTheme]);

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
            <NavBar theme={theme} cycleTheme={cycleTheme}/>
            <main>
                <AboutMe/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>
            {isJustKidding && (
                <div className="just-kidding-overlay" aria-hidden="true">
                </div>
            )}
        </>
    );
}

export default App;
