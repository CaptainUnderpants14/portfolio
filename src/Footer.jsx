function Footer() {

    const playBubbleSound = () => {
        const audio = new Audio("/sounds/bubble.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <div className="w-full h-20 flex justify-center items-center">
            <div className="absolute w-full flex items-center justify-center">
                <img src="/Heart.svg"
                     alt="Heart icon"
                     className="relative w-16 -top-21 hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-top-8"
                     onClick={playBubbleSound}
                />
            </div>
            <div className="w-[70%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
                <p className="text-lg md:text-xl">
                    Designed & Developed By
                    <span className="text-lg md:text-[24px] font-pixelm"> Paras Sharma</span>
                </p>
                <p className="text-base md:text-xl">
                    &copy; 2025.{" "}
                    <span className="text-lg md:text-xl">All rights reserved</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
