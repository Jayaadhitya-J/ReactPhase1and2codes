import { useEffect, useState } from "react";

const ThemePersister = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <>
            <h1>Theme Persister</h1>
            <p>Current theme: {theme}</p>
            <button type="button" onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"}
            </button>
        </>
    );
};

export default ThemePersister;
