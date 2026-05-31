import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


function Projects() {
    const playMessageSound = () => {
        const audio = new Audio("/sounds/messageSound.mp3");
        audio.play();
    };
    return(
        <div
            id="projects" 
            className="h-[68%] border-b-2 border-dashed w-full flex items-center justify-center dark:bg-gradient-to-b dark:from-zinc-600 dark:via-black dark:to-zinc-700 dark:text-gray-200">
            <div className="w-[84%] md:w-[78%] lg:w-[60vw] py-14">
                <div className="relative flex items-center justify-center">
                    <img
                        src="/aboutme.svg"
                        alt="About Me background"
                        className="w-[175px] md:w-[240px] lg:w-[230px] h-auto object-contain
                        transition-all duration-200
                        dark:[filter:brightness(0.94)_drop-shadow(0_0_16px_rgba(255,255,255,0.8))]"
                    />

                    <p className="absolute  font-pixel inset-0 flex items-center justify-center text-[30px] font-bold z-10 dark:text-black">
                        Projects
                    </p>
                </div>

                <div className="mt-14">

                    {/* foxy */}
                    <div className="flex justify-between w-full">
                        <p className="text-4xl font-pixel">
                            Foxy
                        </p>
                        <div className="flex gap-2">
                            <FaGithub size={30} className="hover:cursor-pointer hover:scale-102 duration-200" 
                            onClick={() => window.open("https://github.com/CaptainUnderpants14/FoxyAi", "_blank")}/>

                            <MdArrowOutward size={30} className="hover:cursor-pointer hover:scale-102"
                            onClick={() => window.open("https://github.com/CaptainUnderpants14", "_blank")}/>
                        </div>
                    </div>
                    <div className="flex py-2">
                            <p className="font-bold text-xl">Status: <span className="font-normal">Active</span> </p>
                            <img src="./statusActive.svg" alt="Status Active" className="w-6 mx-2"/>
                    </div>
                    <p className="text-lg mt-2">
                        An AI-Powered Mobile app for curios minds with dynamic content generation on any topic of choice, As-Per-Need learning paths, Quiz functionality, easter eggs and  interactive features to enhance student engagement.
                    </p>


                    <div className="flex justify-between w-full mt-10">
                        <p className="text-3xl font-pixel">
                            Iconic
                        </p>
                        <div className="flex gap-2">
                            <FaGithub size={28} className="hover:cursor-pointer hover:scale-102 duration-200" 
                            onClick={() => window.open("https://github.com/CaptainUnderpants14", "_blank")}/>

                            <MdArrowOutward size={28} className="hover:cursor-pointer hover:scale-102"
                            onClick={() => window.open("https://github.com/CaptainUnderpants14", "_blank")}/>
                        </div>
                    </div>
                    <div className="flex py-2">
                            <p className="font-bold text-xl">Status: <span className="font-normal">Active</span> </p>
                            <img src="./statusActive.svg" alt="Status Active" className="w-6 mx-2"/>
                    </div>
                    <p className="text-lg mt-2">
                        A powerful, easy-to-use Assets Library for react with tailwind inspired code, including 1500+ free icons and 200+ fonts.
                    </p>


                    <div className="flex justify-between w-full mt-10">
                        <p className="text-3xl font-pixel">
                            ParamAyush
                        </p>
                        <div className="flex gap-2">
                            <FaGithub size={28} className="hover:cursor-pointer hover:scale-102 duration-200" 
                            onClick={() => window.open("https://github.com/CaptainUnderpants14", "_blank")}/>

                            <MdArrowOutward size={28} className="hover:cursor-pointer hover:scale-102"
                            onClick={() => window.open("https://github.com/CaptainUnderpants14", "_blank")}/>
                        </div>
                    </div>
                    <div className="flex py-2">
                            <p className="font-bold text-xl">Status: <span className="font-normal">Inactive</span> </p>
                            <img src="./statusDead.svg" alt="Status Active" className="w-6 mx-2"/>
                    </div>
                    <p className="text-lg mt-2">
                        A FHIR R4 compliant healthcare terminology integration platform to integrate NAMASTE, WHO ICD-11 TM2, 
                        and Biomedicine codes into 
                        EMR systems, enabling dual coding, terminology mapping, secure REST APIs, and interoperable healthcare record 
                        management compliant with India's EHR standards (SIH 25, Problem 26).</p>
                </div>
                {/* Phone and Convo bubble icons */}
                <div className="flex relative">
                <img
                    src="/Phone.svg"
                    alt="Phone icon"
                    // onClick={playDialerSound}
                    className="absolute w-14 top-4 md:w-18 z-10 md:top-6 md:left-10 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                    dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
                <img
                    src="/convoBubble.svg"
                    alt="Text bubble icon"
                    onClick={playMessageSound}
                    className="absolute w-20 top-4 right-4 md:w-20 z-10 md:top-4 md:right-20 h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200
                   dark:[filter:brightness(0.85)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(0.95)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                />
                </div>
            </div>
        </div>
    );
}
export default Projects;