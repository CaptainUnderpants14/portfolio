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
            className="bg-white pt-10 px-5 md:px-20 border-b-2 border-dashed border-black flex justify-center lg:mt-6 relative"
        >
            <div className="w-[80%] max-w-7xl mx-auto">
                {/* Controller Image - Upper left border */}
                <img
                    src="/controller.svg"
                    alt="Controller Icon"
                    onClick={playControllerSound}
                    className="absolute -top-14 left-16 w-24 md:w-28 lg:w-40 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200 md:-top-16 md:left-40 lg:-top-28 lg:left-80"
                />

                <div className="relative grid grid-cols-1 mb-20 md:mb-0 md:grid-cols-3 gap-6 md:gap-12 items-start pt-12">
                    {/* About Me Text */}
                    <div className="flex flex-col justify-start space-y-4 md:space-y-6 text-center lg:text-left col-span-1">
                        <div className="-top-8 relative flex justify-center lg:justify-start items-center md:top-0">
                            <img
                                src="/aboutme.svg"
                                alt="About Me background"
                                className="w-[200px] md:w-[230px] lg:w-[260px] h-auto object-contain mx-auto lg:mx-0"
                            />
                            <h2 className="font-pixelb absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 text-3xl md:text-4xl lg:text-4xl whitespace-nowrap font-extrabold mx-[-5px] text-black tracking-wide text-center lg:mx-12">
                                About Me
                            </h2>
                        </div>
                        <p className="text-xl md:text-lg lg:text-[20px] leading-relaxed max-w-[360px] text-justify mx-auto lg:mx-0 lg:w-63 lg:h-97">
                            <span className="font-semibold">Welcome to my portfolio</span>, I'm a
                            full-stack Web developer based in Noida. I build scalable, efficient, and maintainable
                            web applications, handling both <span className="font-semibold">backend</span> and{" "}
                            <span className="font-semibold">frontend</span> to deliver complete,
                            high-performing solutions.
                        </p>
                    </div>

                    {/* Experience Box */}
                    <ul className="flex flex-col gap-4 justify-center text-2xl md:block md:text-xl lg:text-3xl text-black font-semibold border-4 bg-[#E2CDF4]/90
                    border-[#E2CDF4]/80 w-70 h-92 mt-6 md:mt-0 rounded-lg p-6 md:p-[47px] shadow-xl text-center space-y-6
                    md:space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-70 lg:h-100">
                        <li className="pb-2 md:pb-[13px]">2+ Years of experience</li>
                        <li className="pb-2 md:pb-[13px]">9+ Projects</li>
                        <li className="pb-2 md:pb-[13px]">Flexible with timezones</li>
                    </ul>


                    {/* Points Box */}
                    <ul className="flex flex-col gap-4 justify-center text-2xl md:block md:text-xl lg:text-3xl text-black font-semibold border-4 bg-[#fef6ce]/90
                    border-[#fef6ce]/80 w-70 h-92 mt-6 md:mt-0 rounded-lg p-6 md:p-[47px] shadow-xl text-center space-y-6
                    md:space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-70 lg:h-100">
                        <li className="pb-2 md:pb-[13px]">2+ Years of experience</li>
                        <li className="pb-2 md:pb-[13px]">9+ Projects</li>
                        <li className="pb-2 md:pb-[13px]">Flexible with timezones</li>
                    </ul>
                </div>

                {/* Pacman Image - Bottom right border */}
                <img
                    src="/pacman.svg"
                    alt="Pacman Icon"
                    onClick={playPacmanSound}
                    className="absolute right-12 -bottom-28 w-48 md:w-52 lg:w-56 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-bottom-34 lg:right-24"
                />
            </div>
        </div>
    );
}

export default AboutMe;