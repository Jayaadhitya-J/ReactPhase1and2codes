import { useEffect, useRef, useState } from "react";

function TypingIndicator() {
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(false);
    const timeoutRef = useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
        setTyping(true);

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setTyping(false);
        }, 2000);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something"
            />

            {typing && <p>User is typing...</p>}
        </>
    );
}

export default TypingIndicator
