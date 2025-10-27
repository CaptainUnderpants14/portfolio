import { useRef } from "react";

function Skills() {
    const audioRef = useRef(null);

    const playDialerSound = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/sounds/dialing.mp3");
        }
        const audio = audioRef.current;
        if (!audio.paused) return;
        audio.currentTime = 0;
        audio.play();
    };

    const playMessageSound = () => {
        const audio = new Audio("/sounds/messageSound.mp3");
        audio.play();
    };

    return (
        <div className="w-full border-b-2 border-dashed py-16 relative">
            {/* Header */}
            <div className="relative mb-28 w-[80%] mx-auto md:w-[70%]">
                <div className="absolute left-0 top-0">
                    <img
                        src="/aboutme.svg"
                        alt="Decorative Banner"
                        className="w-[180px] h-auto -mt-4 ml-4"
                    />
                    <h2 className="text-4xl font-pixelb ml-16 -mt-17">Skills</h2>
                </div>
            </div>

            {/* Skills Section Container */}
            <div className="w-[85%] mx-auto pt-7 md:w-[75%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xl justify-items-center">
                    {/* Frontend */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-gray-300 w-[90%] md:w-[74%] h-[26rem] flex flex-col justify-center text-center p-6">
                        <h3 className="font-pixelm text-2xl mb-6">Frontend</h3>
                        <ul className="flex flex-col gap-5 justify-left">
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/HTMLlogo.svg" alt="HTML" />
                                Html
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-8 h-6" src="/tailwindcsslogo.png" alt="TailwindCSS" />
                                TailwindCSS
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/TsLogo.svg" alt="TypeScript" />
                                TypeScript
                            </li>
                            <li className="flex items-center gap-3 font-semibold lg: mx-8">
                                <img className="w-7 h-auto" src="/ReactLogo.svg" alt="React" />
                                React
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/JavaScript logo.svg" alt="JavaScript" />
                                JavaScript
                            </li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-gray-300 w-[90%] md:w-[74%] h-[26rem] flex flex-col justify-center text-center p-6">
                        <h3 className="font-pixelm text-2xl mb-6">Backend</h3>
                        <ul className="flex flex-col gap-5 justify-left">
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/Javalogo.svg" alt="Java" />
                                Java
                            </li>
                            <li className="flex items-center gap-3 font-semibold lg: mx-8">
                                <img className="w-7 h-auto" src="/spring-boot-1.svg" alt="Spring Boot" />
                                SpringBoot
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/sqllogo.svg" alt="MySQL" />
                                MySQL
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/postgreslogo.svg" alt="PostgreSQL" />
                                PostgreSQL
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/mongologo.svg" alt="MongoDB" />
                                MongoDB
                            </li>
                        </ul>
                    </div>

                    {/* DevOps */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-gray-300 w-[90%] md:w-[68%] h-[20rem] flex flex-col justify-center text-center p-6">
                        <h3 className="font-pixelm text-2xl mb-6">DevOps</h3>
                        <ul className="flex flex-col gap-5 justify-left">
                            <li className="flex items-center gap-3 font-semibold lg: mx-8">
                                <img className="w-7 h-auto" src="/DockerLogo.svg" alt="Docker" />
                                Docker
                            </li>
                            <li className="flex items-center gap-3 lg: mx-8">
                                <img className="w-7 h-auto" src="/gitLogo.svg" alt="Git" />
                                Git
                            </li>
                            <li className="flex items-center gap-3 font-semibold lg: mx-8">
                                <img className="w-9 h-auto" src="/Amazon_Web_Services_Logo.png" alt="AWS" />
                                AWS
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Interactive Icons */}
            <div className="flex mt-12 relative">
                <img
                    src="/Phone.svg"
                    alt="Phone icon"
                    onClick={playDialerSound}
                    className="absolute w-20 left-12 md:w-30 md:left-40 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />
                <img
                    src="/convoBubble.svg"
                    alt="Text bubble icon"
                    onClick={playMessageSound}
                    className="absolute w-25 -top-1 right-10 md:w-38 md:right-60 md:-top-8 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />
            </div>
        </div>
    );
}

export default Skills;
