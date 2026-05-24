import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


function Projects() {
    return(
        <div className="h-[68%] border-b-2 border-dashed w-full flex items-center justify-center">
            <div className="w-[100%] md:w-[78%] lg:w-[60vw] py-14">
                <div className="relative flex items-center justify-center">
                    <img
                        src="/aboutme.svg"
                        alt="About Me background"
                        className="w-[175px] md:w-[240px] lg:w-[230px] h-auto object-contain
                        transition-all duration-200
                        dark:[filter:brightness(0.94)_drop-shadow(0_0_16px_rgba(255,255,255,0.8))]"
                    />

                    <p className="absolute  font-pixel inset-0 flex items-center justify-center text-[30px] font-bold z-10">
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
                            onClick={() => window.open("https://google.com", "_blank")}/>
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
                            onClick={() => window.open("https://github.com/CaptainUnderpants14/FoxyAi", "_blank")}/>

                            <MdArrowOutward size={28} className="hover:cursor-pointer hover:scale-102"
                            onClick={() => window.open("https://google.com", "_blank")}/>
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
                            onClick={() => window.open("https://github.com/CaptainUnderpants14/FoxyAi", "_blank")}/>

                            <MdArrowOutward size={28} className="hover:cursor-pointer hover:scale-102"
                            onClick={() => window.open("https://google.com", "_blank")}/>
                        </div>
                    </div>
                    <div className="flex py-2">
                            <p className="font-bold text-xl">Status: <span className="font-normal">Inactive</span> </p>
                            <img src="./statusDead.svg" alt="Status Active" className="w-6 mx-2"/>
                    </div>
                    <p className="text-lg mt-2">
                        An AI-Powered Mobile app for curios minds with dynamic content generation on any topic of choice, As-Per-Need learning paths, Quiz functionality, easter eggs and  interactive features to enhance student engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Projects;