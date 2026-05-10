import { useEffect, useState } from "react";

const ScrollTracker = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="scroll-track" aria-hidden="true">
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollTracker;
