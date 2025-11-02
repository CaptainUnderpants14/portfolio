import './App.css'
import NavBar from "./NavBar.jsx";
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { useState, useEffect } from "react";

function App() {
    // initialize from localStorage (default to system or light)
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        // optional: follow system preference
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [dark, setDark] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement; // <html>
        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    const toggleDark = () => setDark(prev => !prev);

    return (
        <>
            {/* Pass state and toggle to NavBar; keep button in NavBar */}
            <NavBar dark={dark} toggleDark={toggleDark} />
            {/* rest of your app */}
            <main>
                <AboutMe/>
                <Skills/>
                <Contact/>
                <Footer/>
            </main>
        </>
    );
}

export default App;
