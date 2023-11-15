import React, { useEffect, useState, useRef } from "react";
import sun from "../img/icons/sun.svg"
import moon from "../img/icons/moon.svg"

const BtnDarkMode = () => {
    const [theme, setTheme] = useState("light")
    const btnRef = useRef(null)
    useEffect(() => {
        console.log(theme)

        if (theme === "dark") {
            document.body.classList.add("dark")
            btnRef.current.classList.add("dark-mode-btn--active")
        } else if (theme === "light") {
            document.body.classList.remove("dark")
            btnRef.current.classList.remove("dark-mode-btn--active")
        }
    }, [theme])

    const handleClick = () => {
        setTheme(preveState => preveState === "light" ? "dark" : "light");
    }
    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={handleClick}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
}
 
export default BtnDarkMode;