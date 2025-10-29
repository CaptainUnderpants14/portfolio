import { useState } from 'react';

const NavBar2 = () => {

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
        closeMobileMenu(); // Close menu on link click
    };

    return (
        <>
            <nav className="font-pixelm fixed top-0 left-0 w-full border-b-2 border-dashed border-black bg-white z-50 h-16 md:h-20">
                <div className="w-[80%] max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 h-full relative">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            src="/BackButtons.svg"
                            alt="Logo"
                            className="w-14 md:w-[70px] h-auto hover:scale-110 transition-transform duration-200 cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 lg:gap-10 text-xl lg:text-2xl font-medium items-center">
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("about")}>
                            About
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("skills")}>
                            Skills
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("projects")}>
                            Projects
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("contact")}>
                            Contact
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 relative z-10"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t-2 border-dashed border-black shadow-lg z-40">
                        <div className="w-[80%] max-w-7xl mx-auto px-4 sm:px-8 py-4">
                            <ul className="flex flex-col gap-4 text-lg font-medium items-start">
                                <li
                                    className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("about")}
                                >
                                    About
                                </li>
                                <li
                                    className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("skills")}
                                >
                                    Skills
                                </li>
                                <li
                                    className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
                                    onClick={() => scrollToSection("projects")}
                                >
                                    Projects
                                </li>
                                <li
                                    className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap w-full py-2"
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
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={closeMobileMenu}
                />
            )}

            <div className="relative w-full pt-25 h-90 bg-[#E2CDF4] border-b-2 border-dashed border-black pb-10 md:h-auto md:pt-24 lg:pt-34">
                <div className="w-[80%] max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between mt-8 md:mt-17 md:mb-10 gap-8 lg:gap-0">
                    <div className="flex flex-col items-start w-full max-w-2xl">
                        <p className="font-pixel text-5xl md:text-6xl lg:text-8xl typewriter">Hello,</p>
                        <p className="text-4xl md:text-5xl lg:text-[55px] font-bold tracking-wider mt-2">I'm Paras Sharma,</p>
                        <p className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider text-gray-700 mt-1">
                            A Full Stack Web Developer.
                        </p>
                    </div>
                    <div className="hidden lg:flex flex-col items-end space-y-2 md:space-y-4 lg:space-y-8 w-full lg:w-auto lg:max-w-xs">
                        <img
                            className="w-48 md:w-[250px] h-auto hover:scale-105 transition-transform duration-200 -mt-4 md:-mt-8 lg:-mt-26 hidden lg:block"
                            src="/Screen3.svg"
                            alt="Screen"
                        />
                        <img
                            className="w-32 md:w-[170px] h-auto hover:scale-105 transition-transform rotate-4 duration-200 cursor-pointer mx-12 -mt-4 md:-mt-8 lg:-mt-36 hidden lg:block"
                            src="/Keyboard6.svg"
                            alt="Keyboard"
                            onClick={playKeyboardClickSound}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar2;