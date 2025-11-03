import { useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const NavBar = ({ dark, toggleDark }) => {

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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeMobileMenu();
    };

    return (
        <div className={`dark:bg-black ${dark && "dark"}`}>
            <nav className="font-pixelm fixed top-0 left-0 w-full border-b-2 border-dashed border-black bg-white z-50 h-16 md:h-20 dark:bg-zinc-700 dark:border-white">
                <div className="w-[80%] max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 h-full relative">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            src="/navButtons.svg"
                            alt="Logo"
                            className="w-14 md:w-16 lg:w-[72px] h-auto hover:cursor-pointer transition-transform duration-200
                            md:dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 md:dark:hover:[filter:brightness(1.05)_drop-shadow(0_0_8px_rgba(255,255,255,0.8))]"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                    </div>

                    <ul className="hidden md:flex gap-8 text-xl font-medium items-center dark:text-white">
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("about")}>
                            About
                        </li>
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("")}>
                            Projects
                        </li>
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("skills")}>
                            Skills
                        </li>
                        <li
                            className="font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("contact")}>
                            Contact
                        </li>
                        <li  className="md:relative">
                            <button className="hover:cursor-pointer dark:hover:scale-100 hover:shadow-[0_0_18px_4px_rgba(0,0,0,0.7)]
                            dark:hover:shadow-none dark:hover:[filter:brightness(1.08)_drop-shadow(0_0_18px_rgba(255,255,255,1.3))]
                             transition-transform px-3 py-1 font-bold border-2 rounded-3xl duration-300
                              dark:text-white dark:border-white dark:bg-black"
                                    onClick={toggleDark}>{dark ? "Light" : "Dark"}
                                {/*<IoSunnyOutline />*/}
                                {/*<IoIosMoon />*/}
                            </button>
                        </li>
                    </ul>
                    {/* Container for both buttons */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* Theme Toggle Button */}
                        <button
                            className="rounded-full text-black dark:text-white"
                            onClick={toggleDark}
                            aria-label="Toggle theme"
                        >
                            {dark ? (
                                <img src ="/lightTheme.png"  className="w-6 h-auto [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.9))]"/>   // show sun in dark mode
                            ) : (
                                <img src = "/darkTheme.png" className="w-7 h-auto [filter:drop-shadow(2px_2px_6px_rgba(0,0,0,0.8))]"/>        // show moon in light mode
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="p-2 relative z-10 text-black dark:text-white transition-transform duration-200 hover:scale-110"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
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

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t-2 border-dashed border-black shadow-lg z-40 dark:bg-zinc-700 dark:border-white">
                        <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-8 py-4">
                            <ul className="flex flex-col gap-4 text-lg font-medium items-start dark:text-white">
                                <li
                                    className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("about")}
                                >
                                    About
                                </li>
                                <li
                                    className="font-bold cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("skills")}
                                >
                                    Skills
                                </li>
                                <li
                                    className="font-bold  cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("projects")}
                                >
                                    Projects
                                </li>
                                <li
                                    className="font-bold  cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("contact")}
                                >
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>

            {/* Backdrop for mobile menu (optional, for better UX on small screens) */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-white/30 backdrop-blur-sm z-30"
                    onClick={closeMobileMenu}
                />

            )}

            <div className="w-full bg-[#e2cdf4] border-b-2 border-dashed border-black dark:bg-gradient-to-b dark:from-zinc-600 dark:to-black
                dark:border-white">
                    <div className="w-[80%] h-90 mx-auto flex flex-col md:flex-row items-start justify-evenly gap-8 md:h-100 lg:h-124 ">
                        <div className="flex flex-col justify-center items-start w-full mx-auto pt-14 lg:relative lg:left-8 md:pt-40 lg:pt-48 lg:ml-[4%] dark:text-white">
                            <p className="font-pixel text-5xl md:text-6xl lg:text-8xl typewriter dark:[filter:drop-shadow(0_0_4px_rgba(255,255,255,0.6))]
                                 dark:group-hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))]">Hello,</p>
                            <p className="text-4xl md:text-5xl lg:text-[55px] font-bold tracking-wider mt-2">I'm Paras Sharma,</p>
                            <p className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider text-gray-700 mt-1 dark:text-gray-200">
                                A Full Stack Web Developer.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block relative -top-72 ml-[76%] lg:-top-96 lg:ml-[72%]">
                        {/* Screen */}
                        <img
                            src="/Screen3.svg"
                            alt="Screen"
                            className="hidden dark:hidden md:block absolute md:w-40 lg:w-56 h-auto hover:scale-105 transition-transform duration-200"
                        />
                        <img
                            src="/screenDark.svg"
                            alt="Screen"
                            className="hidden md:dark:block absolute md:w-40 lg:w-56 h-auto hover:scale-105 transition-transform
                            duration-200 brightness-[0.9] dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(1.05)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                        />

                        {/* Keyboard */}
                        <img
                            src="/Keyboard6.svg"
                            alt="Keyboard"
                            onClick={playKeyboardClickSound}
                            className="hidden dark:hidden md:block absolute top-30 left-6 w-32 md:w-26 lg:top-40 lg:w-40 h-auto hover:scale-105 rotate-2 transition-transform duration-200 cursor-pointer"
                        />
                        <img
                            src="/keyboardDark.svg"
                            alt="Keyboard"
                            onClick={playKeyboardClickSound}
                            className="hidden md:dark:block absolute top-30 left-6 w-32 md:w-26 lg:top-40 lg:w-40 h-auto hover:scale-105
                            rotate-2 transition-transform duration-200 cursor-pointer dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(1.10)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                        />
                    </div>
            </div>
        </div>
    );
};

export default NavBar;