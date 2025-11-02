// import { useRef } from "react";

function Skills() {
    // const audioRef = useRef(null);

    // const playDialerSound = () => {
    //     if (!audioRef.current) {
    //         audioRef.current = new Audio("/sounds/dialing.mp3");
    //     }
    //     const audio = audioRef.current;
    //     if (!audio.paused) return;
    //     audio.currentTime = 0;
    //     audio.play();
    // };

    const playMessageSound = () => {
        const audio = new Audio("/sounds/messageSound.mp3");
        audio.play();
    };

    return (
        <div className="w-full border-b-2 border-dashed py-16 relative dark:bg-gradient-to-b dark:from-zinc-700 dark:via-black dark:to-zinc-600
                dark:border-white">
            <div className="relative mb-28 w-[80%] md:w-full">
                <div className="absolute left-10 top-0 md:left-12 lg:left-[13%] ">
                    <img
                        src="/aboutme.svg"
                        alt="Decorative Banner"
                        className="w-[180px] h-auto -mt-4 ml-4 lg:w-[20%] object-contain
                            dark:[filter:brightness(0.92)_drop-shadow(0_0_16px_rgba(255,255,255,0.6))]"
                    />
                    <p className="text-4xl font-pixelb ml-16 lg:text-[2.7vw] -mt-17 lg:ml-[6.5%] lg:-mt-[7.4%] dark:relative">Skills</p>
                </div>
            </div>

            {/* Skills */}
            <div className="w-[85%] mx-auto pt-7 md:w-[90%] md:-mb-10 lg:w-[78%] lg:-mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-xl justify-items-center lg:pt-10">
                    {/* Frontend */}
                    <div className="rounded-xl shadow-xl bg-white border border-gray-300
                     w-[90%] h-[100%] md:w-[90%] md:h-full lg:w-[76%] flex flex-col justify-center text-center p-12 md:p-12
                     lg:hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-zinc-800 dark:border-zinc-500 dark:text-gray-200
                     dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-3xl mb-6 md:text-3xl">Frontend</h3>
                        <ul className="flex flex-col gap-8 justify-left text-xl md:text-xl ">
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/HTMLlogo.svg" alt="HTML" />
                                Html
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-8 h-6" src="/tailwindcsslogo.png" alt="TailwindCSS" />
                                TailwindCSS
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/TsLogo.svg" alt="TypeScript" />
                                TypeScript
                            </li>
                            <li className="flex items-center gap-3 font-semibold md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/ReactLogo.svg" alt="React" />
                                React
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/JavaScript logo.svg" alt="JavaScript" />
                                JavaScript
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="rounded-xl shadow-xl bg-white border border-gray-300 w-[90%]
                     md:w-[90%] md:h-full lg:w-[76%] flex flex-col justify-center text-center p-12 md:p-12
                     lg:hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-zinc-800
                     dark:border-zinc-500 dark:text-gray-200 dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-3xl mb-6 md:text-3xl">Backend</h3>
                        <ul className="flex flex-col gap-8 justify-left text-xl md:text-xl">
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/Javalogo.svg" alt="Java" />
                                Java
                            </li>
                            <li className="flex items-center gap-3 font-semibold md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/spring-boot-1.svg" alt="Spring Boot" />
                                SpringBoot
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/sqllogo.svg" alt="MySQL" />
                                MySQL
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/postgreslogo.svg" alt="PostgreSQL" />
                                PostgreSQL
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/mongologo.svg" alt="MongoDB" />
                                MongoDB
                            </li>
                        </ul>
                    </div>

                    {/* DevOps */}
                    <div className="bg-white rounded-xl shadow-xl border border-gray-300 w-[90%]
                     md:w-[90%] h-[360px] lg:w-[68%] md:h-[320px] flex flex-col justify-center text-center p-12 md:p-12
                     lg:hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-zinc-800
                      dark:border-zinc-500 dark:text-gray-200 dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_15px_rgba(255,255,255,0.5)]">
                        <h3 className="font-pixelm text-3xl mb-6 md:text-3xl">DevOps</h3>
                        <ul className="flex flex-col gap-8 justify-left  text-xl md:text-xl">
                            <li className="flex items-center gap-3 font-semibold md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/DockerLogo.svg" alt="Docker" />
                                Docker
                            </li>
                            <li className="flex items-center gap-3 md:-mx-4 mx-4">
                                <img className="w-7 h-auto" src="/gitLogo.svg" alt="Git" />
                                Git
                            </li>
                            <li className="flex items-center gap-3 font-semibold md:-mx-4 mx-4 ">
                                <img className="w-9 h-auto" src="/Amazon_Web_Services_Logo.png" alt="AWS" />
                                AWS
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Phone and Convo bubble icons */}
            <div className="flex mt-12 relative">
                <img
                    src="/Phone.svg"
                    alt="Phone icon"
                    // onClick={playDialerSound}
                    className="absolute w-16 z-30 top-4 left-12 md:w-24 md:left-20 lg:left-[16%] h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                    dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
                <img
                    src="/convoBubble.svg"
                    alt="Text bubble icon"
                    onClick={playMessageSound}
                    className="absolute w-20 z-30 -top-4 right-8 md:w-32 md:right-24 md:-top-8 lg:right-[16%] h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                   dark:[filter:brightness(0.85)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(0.95)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
            </div>
        </div>
    );
}

export default Skills;
