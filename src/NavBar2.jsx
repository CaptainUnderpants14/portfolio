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
                            className="w-14 md:w-16 lg:w-[72px] h-auto hover:scale-110 transition-transform duration-200 cursor-pointer"
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

            <div className="w-full bg-[#E2CDF4] border-b-2 border-dashed border-black">
                <div className="w-[80%] h-90 mx-auto flex flex-col md:flex-row items-start justify-evenly gap-8 md:h-100 lg:gap-0">
                    <div className="flex flex-col justify-center items-start w-full mx-auto pt-14 md:pt-40">
                        <p className="font-pixel text-5xl md:text-6xl lg:text-8xl typewriter">Hello,</p>
                        <p className="text-4xl md:text-5xl lg:text-[55px] font-bold tracking-wider mt-2">I'm Paras Sharma,</p>
                        <p className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider text-gray-700 mt-1">
                            A Full Stack Web Developer.
                        </p>
                    </div>
                </div>
                <div className="hidden md:block relative -top-72 -right-[72%]">
                    {/* Screen Image */}
                    <img
                        src="/Screen3.svg"
                        alt="Screen"
                        className="hidden md:block absolute md:w-40 lg:w-48 h-auto hover:scale-105 transition-transform duration-200"
                    />

                    {/* Keyboard Image */}
                    <img
                        src="/Keyboard6.svg"
                        alt="Keyboard"
                        onClick={playKeyboardClickSound}
                        className="hidden md:block absolute top-30 left-6 w-32 md:w-26 lg:w-44 h-auto hover:scale-105 rotate-2 transition-transform duration-200 cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
};

export default NavBar2;