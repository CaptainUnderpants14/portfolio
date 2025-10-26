function Footer() {
    return (
        <div className="w-full py-4 md:py-5 px-4 md:px-8 lg:px-0">
            <div className="w-[70%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-center md:text-left">
                <p className="text-xl sm:text-[14px] md:text-xl">
                    Designed & Developed By <span className="text-lg sm:text-xl md:text-[24px] font-pixelm">Paras Sharma</span>
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                    &copy; 2025. <span className="text-lg sm:text-xl md:text-xl">All rights reserved</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;