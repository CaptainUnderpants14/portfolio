function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "ce6a2c05-59bb-4235-85e9-a10eb17460a0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            const sendButtonText = document.getElementById("sendButton");
            sendButtonText.innerText = "Sent!";
            // event.target.reset();
        }
    };

    const playBubbleSound = () => {
        const audio = new Audio("/sounds/bubble.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    return (
        <div
            id="contact"
            className="min-h-screen relative border-b-2 border-dashed border-black pb-16 md:pb-18 lg:pb-18 pt-16 md:pt-18 lg:pt-18">
            <div className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-pixelb text-nowrap pb-6">
                Let's Talk!
            </div>
            <div className="mx-0 md:mx-4 lg:mx-0 text-lg md:text-2xl font-semibold mt-4 md:mt-6 lg:mt-8 w-full md:w-64 lg:w-140 lg:ml-58 mt-4">
                <p className="mb-2">Got an idea, opportunity or a challenge?</p>
                <p>
                    Don't worry, I have the skills to <span className="font-pixelm">make it happen!</span>
                </p>
            </div>
            <div className="w-[70%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center px-4 md:px-8 lg:px-0">
                {/* Left Side: Title, Paragraph, Form - Left-justified */}
                <div className="flex-1 order-2 lg:order-1">


                    <form
                        onSubmit={onSubmit}
                        className="mx-0 md:mx-4 lg:mx-0 mt-6 md:mt-9 flex flex-col gap-4 md:gap-6 text-lg md:text-xl w-full md:w-64 lg:w-108"
                    >
                        <label className="flex flex-col gap-1 md:gap-2">
                            <span className="font-semibold">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                                className="border-2 border-black rounded-lg p-2 md:p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </label>

                        <label className="flex flex-col gap-1 md:gap-2">
                            <span className="font-semibold">Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                className="border-2 border-black rounded-lg p-2 md:p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </label>

                        <label className="flex flex-col gap-1 md:gap-2">
                            <span className="font-semibold">Message</span>
                            <textarea
                                name="message"
                                rows="4 sm:rows-5 md:rows-6"
                                required
                                className="border-2 resize-none h-40 border-black rounded-lg p-2 md:p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                            ></textarea>
                        </label>

                        <button
                            id="sendButton"
                            type="submit"
                            className="w-full md:w-20 lg:w-24 py-2 md:py-3 mt-1 font-pixelm text-lg md:text-2xl shadow-[0_0_10px_#89F336] h-10 md:h-12 lg:h-14 rounded-full bg-[#89F336] hover:scale-110 transition-transform duration-200"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Right Side: Social Icons in Zig-Zag Vertical Pattern */}
                <div className="flex-1 w-full lg:w-1/2 flex flex-col items-end order-1 lg:order-2 gap-6 md:gap-8 lg:gap-10 relative">
                    {/* Email Copy - Top, slight left tilt */}
                    <div className="relative group hover:cursor-pointer self-end lg:self-end -rotate-3 md:-rotate-6">
                        <img
                            src="/Mail.svg"
                            alt="Mail logo"
                            className="w-12 sm:w-16 md:w-20 lg:w-30 h-auto transition-transform duration-200 group-hover:scale-110"
                        />
                        <p
                            id="email"
                            className="absolute -top-1 -right-12 md:-right-16 lg:-right-20 text-sm sm:text-base md:text-lg font-pixelm text-nowrap transition-transform duration-200 group-hover:scale-110 text-center"
                            onClick={() => {
                                navigator.clipboard.writeText("parassharma8890@gmail.com");
                                const emailText = document.getElementById("email");
                                emailText.innerText = "Email Copied!";
                                setTimeout(() => {
                                    emailText.innerText = "Copy Email";
                                }, 2000);
                            }}
                        >
                            Copy Email
                        </p>
                    </div>

                    {/* LinkedIn - Middle, slight right tilt */}
                    <a
                        href="https://www.linkedin.com/in/paras-sharma-514a8426a/"
                        target="_blank"
                        className="relative group self-start lg:self-start rotate-3 md:rotate-6"
                    >
                        <img
                            src="/linkedinlogo.svg"
                            alt="LinkedIn"
                            className="w-12 sm:w-16 md:w-20 lg:w-32 mx-36 h-auto transition-transform duration-200 group-hover:scale-110"
                        />
                    </a>

                    {/* Instagram - Lower middle, slight left tilt */}
                    <a
                        href="https://www.instagram.com/parassharma1466/"
                        target="_blank"
                        className="relative group self-end lg:self-end -rotate-3 md:-rotate-6"
                    >
                        <img
                            src="/instagramLogo.svg"
                            alt="Instagram Logo"
                            className="w-12 sm:w-16 md:w-20 lg:w-30 h-auto transition-transform duration-200 group-hover:scale-110"
                        />
                    </a>

                    {/* Heart - Bottom, centered or slight right */}
                    <div className="relative w-full items-center">
                        <img
                            src="/Heart.svg"
                            alt="Heart icon"
                            className="absolute w-8 sm:w-10 md:w-12 lg:w-18 mt-[35px] h-auto hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                            onClick={playBubbleSound}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;