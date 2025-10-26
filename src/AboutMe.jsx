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
            className="bg-white pt-10 px-5 md:px-20 border-b-2 border-dashed border-black flex justify-center lg:mt-6"
        >
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 items-start w-[90%] max-w-7xl mx-auto">
                {/* Controller Image */}
                <img
                    src="/controller.svg"
                    alt="Controller Icon"
                    onClick={playControllerSound}
                    className="w-20 absolute top-[-90px] right-[-20px] lg:left-[320px] lg:top-[-155px] -translate-x-1/2 lg:translate-x-0 lg:w-37 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />

                {/* About Me Text */}
                <div className="flex flex-col justify-start space-y-6 md:space-y-8 md:col-span-1 text-center lg:text-left">
                    <div className="relative flex justify-center lg:justify-start items-center">
                        <img
                            src="/aboutme.svg"
                            alt="About Me background"
                            className="w-[230px] md:w-[260px] h-auto object-contain mx-auto lg:mx-0"
                        />
                        <h2 className="font-pixelb absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 text-3xl md:text-4xl whitespace-nowrap font-extrabold mx-[-5px] text-black tracking-wide text-center lg:mx-12">
                            About Me
                        </h2>
                    </div>
                    <p className="text-lg md:text-[20px] leading-relaxed max-w-[360px] text-justify mx-auto lg:mx-0 lg:w-63 lg:h-97">
                        <span className="font-semibold">Welcome to my portfolio</span>, I'm a
                        full-stack Web developer based in Noida. I build scalable, efficient, and maintainable
                        web applications, handling both <span className="font-semibold">backend</span> and{" "}
                        <span className="font-semibold">frontend</span> to deliver complete,
                        high-performing solutions.
                    </p>
                </div>

                {/* Experience Box */}
                <ul className="text-xl md:text-3xl text-black font-semibold border-4 bg-[#E2CDF4]/90 border-[#E2CDF4]/80 mt-8 rounded-lg p-[47px] shadow-xl text-center space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-70 lg:h-100">
                    <li className="pb-[13px]">2+ Years of experience</li>
                    <li className="pb-[13px]">9+ Projects</li>
                    <li className="pb-[13px]">Flexible with timezones</li>
                </ul>

                {/* Points Box */}
                <ul className="text-xl mb-18 md:text-3xl text-black font-semibold border-4 bg-[#fef6ce]/90 border-[#fef6ce]/80 mt-8 rounded-lg p-[47px] shadow-xl text-center space-y-10 mx-auto lg:mx-0 max-w-xs lg:w-70 lg:h-100 lg:mb-0">
                    <li className="pb-[13px]">2+ Years of experience</li>
                    <li className="pb-[13px]">9+ Projects</li>
                    <li className="pb-[13px]">Flexible with timezones</li>
                </ul>

                {/* Pacman Image */}
                <img
                    src="/pacman.svg"
                    alt="Pacman Icon"
                    onClick={playPacmanSound}
                    className="absolute mx-29 w-45 h-auto my-[-90px] lg:w-60 lg:my-[-130px] lg:mx-[880px] bottom-[-20px] lg:bottom-[-20px] md:bottom-[-140px] hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />
            </div>
        </div>
    );
}

export default AboutMe;