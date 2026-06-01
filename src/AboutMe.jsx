import { useState } from "react";

function AboutMe() {
    const [open, setOpen] = useState(false);
    const playControllerSound = () => {
        const audio = new Audio("/sounds/retroLaser.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const playClickSound = () => {
        const audio = new Audio("/sounds/finalClick.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="border-b-2 pb-6 border-dashed border-black flex justify-center relative dark:bg-gradient-to-b dark:from-black dark:to-zinc-700
             dark:border-white">
            <div className="w-[92%] md:w-[78%] xl:w-[60vw] mx-auto relative">
                {/* Controller */}
                <img
                    src="/controller.svg"
                    alt="Controller Icon"
                    onClick={playControllerSound}
                    className="absolute left-[70%] md:left-[8%] -top-16 md:-top-18 w-22 md:w-[16%] lg:w-[12%] h-auto hover:cursor-pointer hover:scale-110
                    transition-transform duration-200
                    dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />

                <div className="relative py-10 grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-6 items-end">
                    {/* About Me */}
                    <div className="flex flex-col justify-between space-y-8 md:text-left col-span-1">
                        <div className="relative flex justify-start items-center">
                            <img
                                src="/aboutme.svg"
                                alt="About Me background"
                                className="w-[175px] md:w-[240px] lg:w-[230px] h-auto object-contain mx-auto
                                     transition-all duration-200
                                     dark:[filter:brightness(0.94)_drop-shadow(0_0_16px_rgba(255,255,255,0.8))]"

                            />
                            <h2
                                id="about-title"
                            // items-center justify-center
                                className="font-pixelb absolute inset-0 flex items-center justify-center
                                       text-xl sm:text-[1.35rem] md:text-[2.4rem] lg:text-[1.8rem] whitespace-nowrap
                                       font-extrabold text-black tracking-wide text-center transition-all duration-200 ">
                                About Me
                            </h2>
                        </div>

                        <p className="text-md mx-auto md:text-[24px] lg:text-[18px] leading-7 sm:leading-8 w-[88%] max-w-md text-justify dark:text-white md:pb-4">
                            With experience across multiple freelance projects, I
                            specialize in building scalable and maintainable <span className="font-semibold">web & mobile applications.</span> I manage the complete development
                             lifecycle, from planning and development to deployment and maintenance, delivering reliable, high-performance solutions.
                        </p>
                    </div>

                    <ul 
                        className="flex flex-col relative items-center justify-center
                        text-lg md:text-[24px] lg:text-[18px]
                        text-black font-semibold
                        border-2 border-none
                        rounded-lg text-left shadow-xl
                        mx-auto w-[90%] bg-[#DDD8FF]

                        h-[18rem] md:h-[24rem] lg:h-[22rem]
                        py-8 lg:mb-4
                        space-y-8 lg:space-y-8

                        md:max-w-[28rem]
                        lg:max-w-[28rem]
                        transition-transform duration-200

                        dark:bg-zinc-800 dark:text-gray-200
                        dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]
                        "
                        >
                        <img src="expandUI.svg" alt="" className="w-9 h-9 absolute top-4 right-4 
                            hover:scale-102 cursor-pointer transition-transform duration-200 
                            dark:[filter:brightness(1)_drop-shadow(0_0_4px_rgba(255,255,255,0.6))]
                            dark:hover:[filter:brightness(1.10)_drop-shadow(0_0_6px_rgba(255,255,255,0.8))]" 
                            onClick={() => {setOpen(true); playClickSound()}}
                        />
                        <li>React & React Native</li>
                        <li>SpringBoot & Java</li>
                        <li>PostgreSQL & MongoDB</li>
                        <li>Rest APIs & Deployment</li>

                        
                        {/* <li>
                            <span className="flex items-center gap-3 justify-center">
                            Tech Stack
                            </span>
                        </li>
                         <li className="flex gap-4">
                            <img src="HTMLlogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="JavaScript logo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="ReactLogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="TsLogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="tailwindcsslogo.png" alt="React" className="w-7 h-7 object-contain" />
                        </li>
                        
                        <li className="flex gap-4">
                            <img src="Javalogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="spring-boot-1.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="sqllogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="postgreslogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="mongologo.svg" alt="React" className="w-7 h-7 object-contain" />
                        </li>

                        <li className="flex gap-4 items-center justify-center">
                            <img src="DockerLogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="gitLogo.svg" alt="React" className="w-7 h-7 object-contain" />
                            <img src="Amazon_Web_Services_Logo.png" alt="React" className="w-7 h-7 object-contain" />
                        </li> */}
                    </ul>

                    {open && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 backdrop-blur-sm">
                            <div
                                className="
                                flex flex-col
                                relative 
                                w-[90%] lg:w-[60%]
                                h-[60vh] md:h-auto
                                overflow-y-auto

                                bg-white
                                dark:bg-zinc-900

                                border-2 border-none 
                                rounded-2xl

                                p-6 md:p-10
                                shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]
                                dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]">

                                {/* Close Button */}
                                <button
                                     onClick={() => {setOpen(false); playClickSound()}}
                                    className="
                                    absolute top-3 right-3
                                    text-3xl font-bold
                                    hover:scale-110
                                    transition-transform 
                                    dark:[filter:brightness(1)_drop-shadow(0_0_2px_rgba(255,255,255,0.6))]
                                    dark:hover:[filter:brightness(1.10)_drop-shadow(0_0_6px_rgba(255,255,255,0.8))]
                                    "><img src=".\closeUI.svg" className="w-9 h-9 cursor-pointer"></img>
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 text-base sm:text-lg justify-items-stretch my-8">
                                    {/* Frontend */}
                                    <ul className="rounded-xl shadow-xl bg-white border border-gray-300
                                    w-full flex flex-col justify-center text-center p-6 sm:p-7
                                     dark:bg-zinc-800 dark:border-none dark:text-gray-200
                                    dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]">
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
                                     dark:bg-zinc-800 dark:border-none dark:text-gray-200
                                    dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]">
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

                                    {/* Tools */}
                                    <ul className="rounded-xl shadow-xl bg-white border border-gray-300
                                    w-full flex flex-col justify-center text-center p-6 sm:p-7
                                     dark:bg-zinc-800 dark:border-none dark:text-gray-200
                                    dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]">
                                        <h3 className="font-pixelm text-xl sm:text-2xl mb-4">Tools</h3>
                                        <ul className="flex flex-col gap-3 text-sm sm:text-base">
                                            <li className="flex items-center gap-3 justify-start font-semibold">
                                                <img className="w-7 h-auto" src="/DockerLogo.svg" alt="Docker" />
                                                Docker
                                            </li>
                                            <li className="flex items-center gap-3 justify-start">
                                                <img className="w-7 h-auto" src="/gitLogo.svg" alt="Git" />
                                                Git
                                            </li>
                                            <li className="flex items-center gap-3 justify-start">
                                                <img className="w-7 h-auto" src="/Amazon_Web_Services_Logo.png" alt="AWS" />
                                                AWS
                                            </li>
                                            <li className="flex items-center gap-3 justify-start">
                                                <img className="w-7 h-auto" src="/githubLogo2.svg" alt="AWS" />
                                                Github Actions
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>  
                        </div>
                        )}
                    {/* Experience */}
                    <ul
                        className="flex flex-col items-center justify-center
                        text-lg md:text-[28px] lg:text-[18px]
                        text-black font-semibold
                        bg-[#e2cdf4]
                        rounded-lg shadow-xl text-center
                        mx-auto w-[90%]

                        h-[18rem] md:h-[24rem] lg:h-[22rem]
                        py-8 lg:mb-4
                        space-y-8 lg:space-y-8

                        md:max-w-[28rem]
                        lg:max-w-[28rem]

                        dark:bg-zinc-800 dark:text-gray-200 dark:shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)]
                        ">
                        <li>2+ Years of experience</li>
                        <li>9+ Projects</li>
                        <li>3 Months Maintenance</li>
                        <li>App & Web Development</li>
                    </ul>

                    
                </div>

                {/* Pacman */}
                <img
                    src="/pacman%20logo.svg"
                    alt="Pacman Icon"
                    // onClick={playPacmanSound}
                    className="absolute right-4 -bottom-26 md:-bottom-36 z-10 w-32 md:w-50 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                                dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(0.96)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
            </div>
        </section>
    );
}

export default AboutMe;
