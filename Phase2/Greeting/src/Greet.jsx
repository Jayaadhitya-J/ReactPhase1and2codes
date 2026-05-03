import { useState } from "react";

function Greet({ name, age }) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function toggle() {
        setIsLoggedIn((currentValue) => !currentValue);
    }

    return (
        <div className="app-section">
            <button onClick={toggle}>Toggle Login</button>

            {isLoggedIn ? (
                <h1>
                    Hello {name}, you are {age} years old
                </h1>
            ) : (
                <h1>Please log in</h1>
            )}
        </div>
    );
}

export default Greet;
