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
        }
    };


    return (
        <div
            id="contact"
            className="min-h-screen relative border-b-2 border-dashed border-black pb-12 md:pb-18 lg:pb-18 pt-16 md:pt-18 lg:pt-18"
        >
            <div className="w-full text-center text-5xl md:text-5xl font-pixelb text-nowrap pb-6">
                Let's Talk!
            </div>

            <div className="text-xl w-[90%] mx-auto flex flex-col text-center md:text-left md:ml-[228px] md:w-auto md:text-2xl font-semibold mt-4 md:mt-6 lg:mt-8">
                <p className="mb-2">Got an idea, opportunity or a challenge?</p>
                <p>
                    Don't worry, I have the skills to{" "}
                    <span className="block md:inline-block font-pixelm">make it happen!</span>
                </p>
            </div>



            <div className="w-[70%] md:w-[70%] mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-18 lg:items-center px-4 md:px-8 lg:px-0">
                {/* Left Side: Form */}
                <div className="flex-1 order-2 lg:order-1">
                    <form
                        onSubmit={onSubmit}
                        className="mx-0 md:mx-4 lg:mx-0 mt-6 md:mt-9 flex flex-col gap-6 md:gap-6 text-m md:text-xl w-full md:w-64 lg:w-108"
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
                            className="w-24 md:w-20 lg:w-24 py-2 md:py-3 mt-1 font-pixelm text-lg md:text-2xl shadow-[0_0_10px_#89F336] h-12 md:h-12 lg:h-14 rounded-full bg-[#89F336] hover:scale-110 transition-transform duration-200"
                        >
                            Send
                        </button>
                    </form>
                    <p className="font-pixelm text-center text-2xl mt-8 md:hidden">
                        My Socials
                    </p>
                </div>


                {/* Right Side: Social Icons */}
                <div className="relative flex-1 w-full flex flex-row md:flex-col items-center justify-evenly gap-10 order-1 lg:order-2">
                    {/* Email Copy */}
                    <div className="relative group">
                        <button
                            className="flex flex-col items-center focus:outline-none hover:cursor-pointer"
                            onClick={() => {
                                const email = "parassharma8890@gmail.com";
                                if (navigator.clipboard && window.isSecureContext) {
                                    navigator.clipboard.writeText(email).then(showCopiedMessage).catch(() => fallbackCopyTextToClipboard(email));
                                } else {
                                    fallbackCopyTextToClipboard(email);
                                }

                                function fallbackCopyTextToClipboard(text) {
                                    const textArea = document.createElement("textarea");
                                    textArea.value = text;
                                    textArea.style.position = "fixed";
                                    textArea.style.top = "-1000px";
                                    document.body.appendChild(textArea);
                                    textArea.focus();
                                    textArea.select();
                                    try {
                                        document.execCommand("copy");
                                        showCopiedMessage();
                                    } catch (err) {
                                        console.error("Fallback: Copy failed", err);
                                    }
                                    document.body.removeChild(textArea);
                                }

                                function showCopiedMessage() {
                                    const emailText = document.getElementById("email");
                                    emailText.innerText = "Email Copied!";
                                    setTimeout(() => {
                                        emailText.innerText = "Copy Email";
                                    }, 15000);
                                }
                            }}
                        >
                            <img
                                src="/Mail.svg"
                                alt="Mail logo"
                                className="w-10 md:w-16 lg:w-20 h-auto transition-transform duration-200 group-hover:scale-110"
                            />
                            <p
                                id="email"
                                className="text-xs sm:text-sm md:text-lg font-pixelm text-nowrap transition-transform duration-200 group-hover:scale-110 text-center mt-1"
                            >
                                Copy Email
                            </p>
                        </button>
                    </div>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/paras-sharma-514a8426a/"
                        target="_blank"
                        className="group"
                    >
                        <img
                            src="/linkedinlogo.svg"
                            alt="LinkedIn"
                            className="w-10 md:w-16 lg:w-20 h-auto transition-transform duration-200 group-hover:scale-110"
                        />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/parassharma1466/"
                        target="_blank"
                        className="group"
                    >
                        <img
                            src="/instagramLogo.svg"
                            alt="Instagram Logo"
                            className="w-10 md:w-16 lg:w-20 h-auto transition-transform duration-200 group-hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
