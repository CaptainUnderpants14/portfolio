import { useRef, useState } from "react";

const themeLabels = {
    light: "Light",
    dark: "Dark",
    "just-kidding": "Darker",
};

const playBeepSound = () => {
        const audio = new Audio("/sounds/beep.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

const ThemeToggleButton = ({ theme, onClick, className = "" }) => {
    const isDarkTheme = theme !== "light";
    const isJustKidding = theme === "just-kidding";

    return (
        <button
            className={`relative z-[110] inline-flex min-w-[4rem] items-center justify-center rounded-full border-2 px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all duration-300 hover:cursor-pointer 
                ${isDarkTheme ? "border-white bg-black text-white" : "border-black bg-white text-black hover:shadow-[0_0_18px_4px_rgba(0,0,0,0.45)]"} 
                ${isJustKidding ? "border-white bg-black text-white hover:[filter:brightness(1.08)_drop-shadow(0_0_18px_rgba(255,255,255,1.1))]" : ""} ${className}`}
            onClick={onClick}
            aria-label={`Switch theme from ${themeLabels[theme]}`}
            // title={themeLabels[theme]}
            type="button"
        >
            <span>{themeLabels[theme]}</span>
        </button>
    );
};

const MobileThemeToggleButton = ({ theme, onClick }) => {
    const commonClasses = "rounded-full text-black dark:text-white transition-transform duration-200 hover:scale-110";

    return (
        <button
            className={commonClasses}
            onClick={onClick}
            aria-label={`Switch theme from ${themeLabels[theme]}`}
            title={themeLabels[theme]}
            type="button"
        >
            {theme === "light" && (
                <img
                    src="/darkTheme.png"
                    alt=""
                    className="w-7 h-auto [filter:drop-shadow(2px_2px_6px_rgba(0,0,0,0.8))]"
                />
            )}
            {theme === "dark" && (
                <img
                    src="/lightTheme.png"
                    alt=""
                    className="w-6 h-auto [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.9))]"
                />
            )}
            {theme === "just-kidding" && (
                <img
                    src="/lightTheme.png"
                    alt=""
                    className="w-6 h-auto [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.9))]"
                />
            )}
        </button>
    );
};

const NavBar = ({ theme, cycleTheme }) => {
    const isDarkTheme = theme !== "light";

    const playClickSound = () => {
        const audio = new Audio("/sounds/finalClick.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const playKeyboardClickSound = () => {
        const audio = new Audio("/sounds/spacebarClick.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleThemeToggle = (event) => {
        cycleTheme(event);
        playClickSound();
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        closeMobileMenu();
    };

    const [greenDot, setGreenDot] = useState("./greendot.svg");
    const [paused, setPaused] = useState(false);
    const timeoutRef = useRef(null);


    return (
        <div className="dark:bg-black">
            <nav className="font-pixelm fixed w-full border-b-2 border-dashed border-black bg-white z-50 h-16 md:h-20 dark:bg-zinc-700 dark:border-white">
                <div className="w-[92%] md:w-[78%] lg:w-[60vw] max-w-[980px] mx-auto flex justify-between items-center h-full relative">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            src="/navButtons2.svg"
                            alt="Logo"
                            className="w-18 md:w-20 lg:w-20 h-auto hover:cursor-pointer transition-transform duration-200
                            md:dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                            md:dark:hover:[filter:brightness(1.05)_drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                playClickSound();
                            }}
                        />
                    </div>

                    <ul className="hidden md:flex gap-5 lg:gap-6 text-[18px] font-medium items-center dark:text-white">
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => {
                                scrollToSection("about");
                                playClickSound();
                            }}>
                            Work
                        </li>
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => {
                                scrollToSection("");
                                playClickSound();
                            }}>
                            Projects
                        </li>
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => {
                                scrollToSection("contact");
                                playClickSound();
                            }}
                        >
                            Contact
                        </li>
                        <li className="md:relative">
                            <ThemeToggleButton theme={theme} onClick={handleThemeToggle} className="lg:text-sm"/>
                        </li>
                    </ul>

                    <div className="md:hidden flex items-center gap-4">
                        <MobileThemeToggleButton theme={theme} onClick={handleThemeToggle}/>

                        <button
                            className={`relative z-10 text-black dark:text-white transition-transform duration-200 hover:scale-110 ${isDarkTheme ? "dark:text-white" : ""}`}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            type="button"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 12h16"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 18h16"
                                        />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t-2 border-dashed border-black shadow-lg z-40 dark:bg-zinc-700 dark:border-white">
                        <div className="w-[92%] mx-auto px-2 py-4">
                            <ul className="flex flex-col gap-4 text-base font-medium items-start dark:text-white">
                                <li
                                    className="font-bold cursor-pointer transition-transform duration-200 hover:text-xl whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("about")}
                                >
                                    Work
                                </li>
                                <li
                                    className="font-bold cursor-pointer hover:text-xl transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("skills")}
                                >
                                    Skills
                                </li>
                                <li
                                    className="font-bold cursor-pointer hover:text-xl transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("projects")}
                                >
                                    Projects
                                </li>
                                <li
                                    className="font-bold cursor-pointer hover:text-xl transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("contact")}
                                >
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>

            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-white/30 backdrop-blur-sm z-30"
                    onClick={closeMobileMenu}
                />
            )}

            <div
                className="w-full bg-[#e2cdf4] border-b-2 border-dashed border-black
                pt-15 dark:bg-gradient-to-b dark:from-zinc-600 dark:to-black
                dark:border-white"
            >
    <div
        className="w-[92%] lg:w-[60vw]
        min-h-[18rem] md:min-h-[26rem]
        md:py-14 lg:mx-auto
        flex flex-col md:flex-row
        items-center
        justify-center
        gap-10 lg:gap-14"
    >

        {/* TEXT */}
        <div
            className="flex flex-col pl-10 mb-0 mt-8 md:mt-0 md:mb-4 md:pl-24 lg:mt-8 lg:pl-0 items-start
            justify-center
            w-full 
            text-left
            dark:text-white"
        >
                    <div className="absolute top-25 md:top-30 lg:top-32 flex gap-2 px-1">
                        <img
                        className={`
                        status-pixel darker-allow-motion
                        w-6
                        animate-soft-bounce
                        ${paused ? "pause-animation" : ""}
                        hover:scale-102
                        transition-transform duration-200
                        cursor-pointer
                        dark:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))]
                    `}
                    
                    src={greenDot}

                    onMouseEnter={() => {
                        // cancel pending restart
                        clearTimeout(timeoutRef.current);

                        setPaused(true);
                        setGreenDot("./annoyeddot.svg");
                    }}

                    onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => {
                            setGreenDot("./greendot.svg");
                            setPaused(false);
                        }, 2000);
                    }}

                    onClick={() => {
                        setPaused(true);
                        setGreenDot("./frontdot.svg");
                        playBeepSound();
                    }}

                    alt="Green Dot"
                />
                <p className="font-pixel">Available For Work</p>
            </div>
            <p
                className="font-pixel
                text-4xl md:text-6xl lg:text-5xl
                leading-tight
                typewriter
                dark:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.6))]
                dark:group-hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))]"
            >
                Hello,
            </p>

            <p
                className="text-4xl md:text-5xl lg:text-6xl
                font-bold tracking-wide md:mb-3"
            >
                I'm Paras Sharma,
            </p>

            <p
                className="text-xl md:text-2xl lg:text-[26px]
                font-bold tracking-wide
                text-gray-700 mt-3
                dark:text-gray-200"
            >
                A Full Stack Web & Mobile Developer.
            </p>
        </div>

        {/* IMAGE */}
        <div
            className="hidden md:flex
            relative
            items-center
            justify-center md:max-w-44 lg:max-w-52
            w-60 -top-6"
        >
            <img
                src="/Screen3.svg"
                alt="Screen"
                className="dark:hidden w-full h-auto hover:scale-105 transition-transform duration-200"
            />

            <img
                src="/screenDark.svg"
                alt="Screen"
                className="hidden dark:block w-full h-auto hover:scale-105 transition-transform duration-200
                brightness-[0.9]
                dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                dark:hover:[filter:brightness(1.05)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
            />

            <img
                src="/Keyboard6.svg"
                alt="Keyboard"
                onClick={playKeyboardClickSound}
                className="dark:hidden absolute top-24 left-1/2 lg:top-26
                w-[70%]
                -translate-x-1/2 translate-y-6
                hover:scale-105 rotate-2
                transition-transform duration-200
                cursor-pointer"
            />

            <img
                src="/keyboardDark.svg"
                alt="Keyboard"
                onClick={playKeyboardClickSound}
                className="hidden dark:block absolute top-24 left-1/2 lg:top-26
                w-[70%]
                -translate-x-1/2 translate-y-6
                hover:scale-105 rotate-2
                transition-transform duration-200
                cursor-pointer
                dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                dark:hover:[filter:brightness(1.10)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
            />
        </div>
    </div>
</div>
        </div>
    );
};

export default NavBar;
