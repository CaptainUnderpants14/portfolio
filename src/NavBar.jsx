function NavBar() {
    const playKeyboardClickSound = () => {
        const audio = new Audio("/sounds/spacebarClick.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="font-pixelm fixed top-0 left-0 w-full border-b-2 border-dashed border-black bg-white z-50 h-16 md:h-20">
                <div className="w-[80%] lg:w-[70%] max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
                    <div className="flex items-center flex-shrink-0">
                        <img
                            src="/BackButtons.svg"
                            alt="Logo"
                            className="w-12 sm:w-[70px] h-auto hover:scale-110 transition-transform duration-200 cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                    </div>

                    <ul className="hidden md:flex gap-6 lg:gap-10 text-xl lg:text-2xl font-medium items-center">
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </li>
                        <li
                            className="font-bold text-black cursor-pointer hover:scale-110 transition-transform duration-200 whitespace-nowrap"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </li>
                    </ul>

                    {/* Mobile menu button - placeholder; expand into full mobile menu if needed */}
                    <button className="md:hidden p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative w-full pt-25 h-80 bg-[#E2CDF4] border-b-2 border-dashed border-black md:pt-20 md:h-auto md:pt-24 lg:pt-34 pb-10">
                <div className="w-[80%] lg:w-[70%] max-w-7xl mx-auto flex items-start justify-between mt-8 md:mt-17">
                    <div className="flex flex-col items-start w-full max-w-2xl">
                        <p className="font-pixel text-4xl sm:text-4xl md:text-7xl lg:text-8xl typewriter">Hello,</p>
                        <p className="text-3xl sm:text-3xl md:text-5xl lg:text-[55px] font-bold tracking-wider mt-2">I'm Paras Sharma,</p>
                        <p className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-bold tracking-wider text-gray-700 mt-1">
                            A Full Stack Web Developer.
                        </p>
                    </div>

                    <div className="hidden lg:flex flex-col items-end space-y-2 md:space-y-4 lg:space-y-8">
                        <img
                            className="w-48 sm:w-64 md:w-[250px] h-auto hover:scale-105 transition-transform duration-200 -mt-4 md:-mt-8 lg:-mt-26 hidden lg:block"
                            src="/Screen3.svg"
                            alt="Screen"
                        />
                        <img
                            className="w-32 sm:w-40 md:w-[170px] h-auto hover:scale-105 rotate-3 transition-transform duration-200 cursor-pointer hidden md:block translate-x-[-2rem] md:translate-x-[-3rem] lg:translate-x-[-3rem] lg:-mt-40"
                            src="/Keyboard6.svg"
                            alt="Keyboard"
                            onClick={playKeyboardClickSound}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;