function Skills() {
    const playMessageSound = () => {
        const audio = new Audio("/sounds/finalClick.mp3");
        audio.play();
    };

    return (
        <div id="skills"
            className="w-full border-b-2 border-dashed px-5 lg:px-8 relative dark:bg-gradient-to-b dark:from-zinc-700 dark:via-black dark:to-zinc-600
                dark:border-white">
            <div className="w-[92%] md:w-[78%] xl:w-[60vw] max-w-[980px] mx-auto relative">
                <div className="relative py-10 flex justify-center md:justify-start">
                    <div className="relative inline-flex items-center justify-center">
                    <img
                        src="/aboutme.svg"
                        alt="Decorative Banner"
                        className="w-[150px] sm:w-[175px] h-auto object-contain
                            dark:[filter:brightness(0.92)_drop-shadow(0_0_16px_rgba(255,255,255,0.6))]"
                    />
                    <p className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-pixelb dark:relative">Skills</p>
                    </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-base sm:text-lg justify-items-stretch">
                    {/* Frontend */}
                    <ul className="rounded-xl shadow-xl bg-white border border-gray-300
                     w-full flex flex-col justify-center text-center p-6 sm:p-7
                     lg:hover:scale-102 transition-transform duration-200 cursor-pointer dark:bg-zinc-800 dark:border-zinc-500 dark:text-gray-200
                     dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-xl sm:text-2xl mb-4">Frontend</h3>
                        <ul className="flex flex-col gap-3 text-sm sm:text-base">
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/HTMLlogo.svg" alt="HTML" />
                                Html
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-8 h-6" src="/tailwindcsslogo.png" alt="TailwindCSS" />
                                TailwindCSS
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/TsLogo.svg" alt="TypeScript" />
                                TypeScript
                            </li>
                            <li className="flex items-center gap-3 justify-start font-semibold">
                                <img className="w-7 h-auto" src="/ReactLogo.svg" alt="React" />
                                React
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/JavaScript logo.svg" alt="JavaScript" />
                                JavaScript
                            </li>
                        </ul>
                    </ul>

                    {/* Backend */}
                    <ul className="rounded-xl shadow-xl bg-white border border-gray-300
                     w-full flex flex-col justify-center text-center p-6 sm:p-7
                     lg:hover:scale-102 transition-transform duration-200 cursor-pointer dark:bg-zinc-800 dark:border-zinc-500 dark:text-gray-200
                     dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-xl sm:text-2xl mb-4">Backend</h3>
                        <ul className="flex flex-col gap-3 text-sm sm:text-base">
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/Javalogo.svg" alt="Java" />
                                Java
                            </li>
                            <li className="flex items-center gap-3 justify-start font-semibold">
                                <img className="w-7 h-auto" src="/spring-boot-1.svg" alt="Spring Boot" />
                                SpringBoot
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/sqllogo.svg" alt="MySQL" />
                                MySQL
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/postgreslogo.svg" alt="PostgreSQL" />
                                PostgreSQL
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/mongologo.svg" alt="MongoDB" />
                                MongoDB
                            </li>
                        </ul>
                    </ul>

                    {/* DevOps */}
                    <ul className="rounded-xl shadow-xl bg-white border border-gray-300
                     w-full flex flex-col justify-center text-center p-6 sm:p-7
                     lg:hover:scale-102 transition-transform duration-200 cursor-pointer dark:bg-zinc-800 dark:border-zinc-500 dark:text-gray-200
                     dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-xl sm:text-2xl mb-4">DevOps</h3>
                        <ul className="flex flex-col gap-3 text-sm sm:text-base">
                            <li className="flex items-center gap-3 justify-start font-semibold">
                                <img className="w-7 h-auto" src="/DockerLogo.svg" alt="Docker" />
                                Docker
                            </li>
                            <li className="flex items-center gap-3 justify-start">
                                <img className="w-7 h-auto" src="/gitLogo.svg" alt="Git" />
                                Git
                            </li>
                            <li className="flex items-center gap-3 justify-start font-semibold">
                                <img className="w-9 h-auto" src="/Amazon_Web_Services_Logo.png" alt="AWS" />
                                AWS
                            </li>
                        </ul>
                    </ul>
                </div>

                {/* Phone and Convo bubble icons */}
                <div className="hidden xl:flex mt-8 relative min-h-12">
                <img
                    src="/Phone.svg"
                    alt="Phone icon"
                    // onClick={playDialerSound}
                    className="absolute w-12 z-10 top-2 left-20 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                    dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
                <img
                    src="/convoBubble.svg"
                    alt="Text bubble icon"
                    onClick={playMessageSound}
                    className="absolute w-[4.5rem] z-10 -top-5 right-20 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                   dark:[filter:brightness(0.85)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(0.95)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
                </div>
            </div>
        </div>
    );
}

export default Skills;
