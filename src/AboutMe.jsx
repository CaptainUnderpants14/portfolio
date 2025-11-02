import React, { useRef } from "react";

function AboutMe() {
    const playControllerSound = () => {
        const audio = new Audio("/sounds/retroLaser.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const audioRef = useRef(null);
    const playPacmanSound = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/sounds/pacman.mp3");
        }
        const audio = audioRef.current;
        if (!audio.paused) return;
        audio.currentTime = 0;
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <div
            id="about"
            className="pt-16 px-5 md:px-20 border-b-2 border-dashed border-black flex justify-center relative dark dark:bg-gradient-to-b dark:from-black dark:to-zinc-700
             dark:border-white">
            <div className="w-[90%] md:w-full mx-auto lg:w-[90%] ">
                {/* Controller */}
                <img
                    src="/controller.svg"
                    alt="Controller Icon"
                    onClick={playControllerSound}
                    className="absolute -top-14 left-16 w-24 md:w-28 lg:w-36 h-auto hover:cursor-pointer hover:scale-110
                    transition-transform duration-200 md:-top-16 md:left-40 lg:-top-22 lg:left-80
                    dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />

                <div className="relative grid grid-cols-1 mb-24 md:mb-12 md:grid-cols-3 gap-10 md:gap-10 items-start pt-12 lg:pt-6 lg:mb-16 lg:ml-[6%]">
                    {/* About Me */}
                    <div className="flex flex-col justify-start space-y-4 md:space-y-6 text-center lg:text-left col-span-1 lg:w-[80%] lg:h-[96%] lg:-mt-4">
                        <div className="relative flex justify-center lg:justify-start items-center -top-8 md:top-0 ">
                            <img
                                src="/aboutme.svg"
                                alt="About Me background"
                                className="w-[180px] md:w-[230px] lg:w-[88%] h-auto object-contain mx-auto lg:mx-0 transition-all duration-200
                                dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:group-hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                            />
                            <p
                                className="font-pixelb absolute left-1/2 lg:left-[4%] -translate-x-1/2
                                       text-2xl sm:text-[1.7rem] md:text-3xl lg:text-[2.2vw] whitespace-nowrap
                                       font-extrabold text-black tracking-wide text-center lg:mx-[40%] transition-all duration-200 ">
                                About Me
                            </p>
                        </div>

                        <p className="text-xl md:text-lg lg:text-xl leading-relaxed w-[90%] md:w-full text-justify mx-auto lg:mx-0 lg:w-[84%] lg:h-[100%] dark:text-white">
                            <span className="font-semibold">Welcome to my portfolio</span>, I'm a
                            full-stack Web developer based in Noida. I build scalable, efficient, and maintainable
                            web applications, handling both <span className="font-semibold">backend</span> and{" "}
                            <span className="font-semibold">frontend</span> to deliver complete,
                            high-performing solutions.
                        </p>
                    </div>

                    {/* Experience */}
                    <ul
                        className="flex flex-col items-center justify-center text-xl gap-4 md:text-xl lg:text-[1.6vw]
                             text-black font-semibold border-4 bg-[#e2cdf4] border-[#e2cdf4]
                             w-[84%] h-full md:w-full md:h-[92%] mt-6 md:mt-0 rounded-lg p-10 md:p-[47px]
                             shadow-xl text-center space-y-6 md:space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-[80%] lg:h-[96%]
                             lg:hover:scale-105 transition-transform duration-200 cursor-pointer dark:bg-zinc-500
                             dark:border-zinc-400 dark:text-gray-200 dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_25px_rgba(255,255,255,0.5)]
                             ">
                        <li>2+ Years of experience</li>
                        <li>9+ Projects</li>
                        <li>6 Months Maintenance</li>
                        <li>Flexible with timezones</li>
                    </ul>

                    {/* Experience Box */}
                    <ul className="flex flex-col items-center justify-center text-xl gap-4 md:text-xl lg:text-[1.6vw]
                             text-black font-semibold border-4 bg-[#fef6ce]/90 border-[#fef6ce]/80
                             w-[84%] h-full md:w-full md:h-[92%] mt-6 md:mt-0 rounded-lg p-10 md:p-[47px]
                             shadow-xl text-center space-y-6 md:space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-[80%] lg:h-[96%]
                             lg:hover:scale-105 transition-transform duration-200 cursor-pointer
                              dark:bg-zinc-500 dark:border-zinc-400 dark:text-gray-100 dark:[box-shadow:inset_0_0_10px_rgba(255,255,255,0.5),_0_0_25px_rgba(255,255,255,0.5)]">
                        <li>9+ Projects</li>
                        <li>2+ Years of experience</li>
                        <li>Eager to Learn</li>
                        <li>6 Months Maintenance</li>
                    </ul>
                </div>

                {/* Pacman */}
                <img
                    src="/pacman%20logo.svg"
                    alt="Pacman Icon"
                    onClick={playPacmanSound}
                    className="absolute right-12 z-30 -bottom-28 w-48 md:w-44 lg:w-56 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-bottom-34 lg:right-24
                                dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
            </div>
        </div>
    );
}

export default AboutMe;