import { useEffect } from "react";

const viewTitles = {
    home: "Home",
    clock: "Clock",
    typing: "Typing Indicator",
    theme: "Theme",
    scroll: "Scroll Tracker",
    notes: "Phase 4 Notes",
};

const DocumenetTitle = ({ currentView }) => {
    const pageTitle = viewTitles[currentView] ?? "React App";

    useEffect(() => {
        document.title = `${pageTitle} | Phase 4`;
    }, [pageTitle]);

    return null;
};

export default DocumenetTitle;
