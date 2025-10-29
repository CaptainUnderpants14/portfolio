function Footer() {

    const playBubbleSound = () => {
        const audio = new Audio("/sounds/bubble.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <div className="w-full h-20 flex justify-evenly items-center mb-10">
            <div className=" absolute w-full flex items-center justify-center">
                <img src="/Heart.svg"
                     alt="Heart icon"
                     className="relative w-10 -top-10 hover:cursor-pointer hover:scale-110 transition-transform duration-200 lg:-top-8"
                     onClick={playBubbleSound}
                />
            </div>
            <div className="w-full md:w-[80%] mx-auto flex mt-4 flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
                <p className="text-[16px] md:text-xl">
                    Designed & Developed By {" "}
                    <p className="text-[18px] inline-block md:block text-center md:text-[24px] font-pixelm"> Paras Sharma</p>
                </p>
                <p className="text-[16px] md:text-xl">
                    &copy; 2025.{" "}
                    <span className="text-[18px] md:text-xl">All rights reserved</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
