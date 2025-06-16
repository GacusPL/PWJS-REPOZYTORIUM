import React from 'react';
import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
    const { dark, toggleTheme } = useTheme();

    const themeStyles = {
        background: dark ? "#333" : "#f0f0f0",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        border: "1px solid #ccc",
        marginTop: "10px",
        borderRadius: "5px",
    };

    return (
        <div style={themeStyles}>
            <p>Aktualny motyw jest: {dark ? "Ciemny" : "Jasny"}</p>
            <button onClick={toggleTheme}>Przełącz motyw</button>
        </div>
    );
}

export default ThemeSwitcher;