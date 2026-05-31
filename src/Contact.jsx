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
            document.getElementById("contactForm").reset();
            sendButtonText.innerText = "Sent!";
        }
    };

    const playClickSound = () => {
        const audio = new Audio("/sounds/finalClick.mp3");
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
    };

    const copyEmail = () => {
        const email = "parassharma8890@gmail.com";

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard
                .writeText(email)
                .then(showCopiedMessage)
                .catch(() => fallbackCopyTextToClipboard(email));
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
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative border-b-2 py-12 border-dashed border-black px-5 lg:px-8 dark:bg-gradient-to-b dark:from-zinc-600 dark:via-black dark:to-zinc-700 dark:border-white"
        >
            <div className="w-[92%] md:w-[78%] xl:w-[60vw] max-w-[980px] mx-auto dark:text-gray-200">

                {/* Heading */}
                <h2
                    id="contact-title"
                    className="w-full pb-4 text-center text-4xl md:text-6xl font-pixelb dark:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.6))]"
                >
                    Let's Build!
                </h2>

                {/* Subtitle */}
                <div className="text-lg md:text-2xl pb-8 lg:text-2xl max-w-2xl md:max-w-4xl mx-auto text-center font-semibold">
                    <p>
                        Got an idea, opportunity or a challenge?
                    </p>
                    <p>
                        Don't worry, I have the skills to{" "}
                        <span className="font-pixelm block sm:inline">
                            make it happen!
                        </span>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-start">

                    {/* FORM */}
                    <div className="flex-1 order-2 lg:order-1">

                        <form
                            id="contactForm"
                            onSubmit={onSubmit}
                            className="flex flex-col  gap-4 sm:gap-5 text-base md:text-2xl lg:text-lg w-full max-w-xl mx-auto lg:mx-0"
                        >

                            {/* Name */}
                            <label className="flex flex-col gap-1 md:gap-2">
                                <span className="font-semibold">
                                    Your Name
                                </span>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="border-2 border-black rounded-lg p-2.5 bg-white text-black
                                    focus:outline-none focus:ring-2 focus:ring-black
                                    dark:bg-zinc-100
                                    dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                    dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                />
                            </label>

                            {/* Email */}
                            <label className="flex flex-col gap-1 md:gap-2">
                                <span className="font-semibold">
                                    Email
                                </span>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="border-2 border-black rounded-lg p-2.5 bg-white text-black
                                    focus:outline-none focus:ring-2 focus:ring-black
                                    dark:bg-zinc-100
                                    dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                    dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                />
                            </label>

                            {/* Message */}
                            <label className="flex flex-col gap-1 md:gap-2">
                                <span className="font-semibold">
                                    Message
                                </span>

                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    className="border-2 resize-none h-32 border-black rounded-lg p-2.5
                                    bg-white text-black focus:outline-none focus:ring-2 focus:ring-black
                                    dark:bg-zinc-100
                                    dark:[filter:brightness(1)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                    dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                ></textarea>
                            </label>

                            {/* Button */}
                            <button
                                onClick={playClickSound}
                                id="sendButton"
                                type="submit"
                                className="w-24 md:w-30 py-2 font-pixelm text-lg md:text-2xl
                                rounded-full bg-[#89F336] hover:scale-110 transition-transform duration-300
                                dark:bg-zinc-100 dark:text-gray-900
                                dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                dark:group-hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                            >
                                Send
                            </button>

                        </form>

                        {/* MOBILE SOCIALS */}
                        <div className="flex flex-col items-center mt-10 gap-4 lg:hidden">

                            <p className="font-pixelm text-2xl md:text-4xl">
                                My Socials
                            </p>

                            <div className="flex items-center justify-center gap-10">

                                {/* Mail */}
                                <a
                                    onClick={playClickSound}
                                    href="mailto:parassharma8890@gmail.com?subject=Inquiring about ..."
                                    className="group"
                                >
                                    <img
                                        src="/Mail.svg"
                                        alt="Mail logo"
                                        className="w-10 sm:w-12 h-auto transition-transform duration-200 group-hover:scale-110
                                        dark:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                        dark:group-hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                    />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    onClick={playClickSound}
                                    href="https://www.linkedin.com/in/paras-sharma-514a8426a/"
                                    target="_blank"
                                    className="group"
                                >
                                    <img
                                        src="/linkedinlogo2.svg"
                                        alt="LinkedIn"
                                        className="w-10 sm:w-12 h-auto transition-transform duration-200 group-hover:scale-110
                                        dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                        dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                    />
                                </a>

                                {/* Github */}
                                <a
                                    onClick={playClickSound}
                                    href="https://github.com/CaptainUnderpants14"
                                    target="_blank"
                                    className="group"
                                >
                                    <img
                                        src="/githubLogo2.svg"
                                        alt="Github Logo"
                                        className="w-9 sm:w-10 h-auto transition-transform duration-200 group-hover:scale-110
                                        dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                        dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                    />
                                </a>

                                {/* Instagram */}
                                <a
                                    onClick={playClickSound}
                                    href="https://www.instagram.com/parassharma1466/"
                                    target="_blank"
                                    className="group"
                                >
                                    <img
                                        src="/instaLogo.png"
                                        alt="Instagram Logo"
                                        className="w-9 sm:w-10 h-auto transition-transform duration-200 group-hover:scale-110
                                        dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                        dark:hover:[filter:brightness(0.95)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                    />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* DESKTOP SOCIALS */}
                    <div className="hidden lg:flex relative w-full lg:w-44 flex-row lg:flex-col items-center justify-center gap-5 sm:gap-6 order-1 lg:order-2 lg:pt-2">

                        {/* Email */}
                        <div className="relative group lg:self-start">
                            <button
                                className="flex flex-col items-center focus:outline-none hover:cursor-pointer"
                                onClick={copyEmail}
                            >
                                <img
                                    onClick={playClickSound}
                                    src="/Mail.svg"
                                    alt="Mail logo"
                                    className="w-12 lg:w-14 h-auto transition-transform duration-200 group-hover:scale-110 lg:-rotate-3
                                    dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                    dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                                />

                                <p
                                    id="email"
                                    className="text-xs lg:text-sm font-pixelm text-nowrap transition-transform duration-200 group-hover:scale-110 text-center mt-1"
                                >
                                    Copy Email
                                </p>
                            </button>
                        </div>

                        {/* LinkedIn */}
                        <a
                            onClick={playClickSound}
                            href="https://www.linkedin.com/in/paras-sharma-514a8426a/"
                            target="_blank"
                            className="group lg:self-end"
                        >
                            <img
                                src="/linkedinlogo2.svg"
                                alt="LinkedIn"
                                className="w-10 sm:w-12 lg:w-16 h-auto transition-transform duration-200 group-hover:scale-110 lg:rotate-3
                                dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                            />
                        </a>

                        {/* Github */}
                        <a
                            onClick={playClickSound}
                            href="https://github.com/CaptainUnderpants14"
                            target="_blank"
                            className="group lg:self-start"
                        >
                            <img
                                src="/githubLogo2.svg"
                                alt="Github Logo"
                                className="w-9 sm:w-10 lg:w-14 h-auto transition-transform duration-200 group-hover:scale-110 lg:-rotate-5
                                dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                dark:hover:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                            />
                        </a>

                        {/* Instagram */}
                        <a
                            onClick={playClickSound}
                            href="https://www.instagram.com/parassharma1466/"
                            target="_blank"
                            className="group lg:self-end"
                        >
                            <img
                                src="/instaLogo.png"
                                alt="Instagram Logo"
                                className="w-9 sm:w-10 lg:w-14 h-auto transition-transform duration-200 group-hover:scale-110 lg:rotate-3
                                dark:[filter:brightness(0.90)_drop-shadow(0_0_8px_rgba(255,255,255,0.6))]
                                dark:hover:[filter:brightness(0.95)_drop-shadow(0_0_12px_rgba(255,255,255,0.8))]"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
