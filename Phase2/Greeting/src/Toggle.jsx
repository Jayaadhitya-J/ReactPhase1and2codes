import { useState } from "react";

function Toggle() {
    const [status, setStatus] = useState("on");

    function handleToggle() {
        setStatus((currentStatus) => (currentStatus === "on" ? "off" : "on"));
    }

    return (
        <div className="app-section">
            <p>Status: {status}</p>
            <button onClick={handleToggle}>
                Turn {status === "on" ? "off" : "on"}
            </button>
        </div>
    );
}

export default Toggle;
