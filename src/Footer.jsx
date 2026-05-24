function Footer() {

    const playBubbleSound = () => {
        const audio = new Audio("/sounds/bubble.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <div className="w-full py-6 md:py-4 flex justify-evenly items-center dark:bg-zinc-700">
            <div className=" absolute w-full flex items-center justify-center">
                <img src="/Heart.svg"
                     alt="Heart icon"
                     className="dark:hidden relative w-10 lg:w-[4%] -top-12 md:-top-10 hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-top-8 dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:group-hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                     onClick={playBubbleSound}
                />
                <img src="/heartDark.svg"
                     alt="Heart icon"
                     className="hidden dark:block relative w-10 lg:w-[4%] -top-12 md:-top-10 hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-top-8
                     dark:[filter:brightness(0.95)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                 dark:hover:[filter:brightness(1.05)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                     onClick={playBubbleSound}
                />
            </div>
            <div className="w-[92%] md:w-[78%] xl:w-[60vw] max-w-[980px] px-2 lg:px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left dark:text-gray-200">
                <p className="text-md md:text-[15px]">
                    Designed & Developed By {" "}
                    <span className="text-lg inline-block md:block text-center md:text-[18px] font-pixelm"> Paras Sharma</span>
                </p>
                <p className="text-md md:text-[15px]">
                    &copy; 2026.{" "}
                    <span className="text-mdmd:text-[15px]">All rights reserved</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
