import { useState } from "react";
import Clock from "./Clock";
import DocumenetTitle from "./DocumenetTitle";
import ScrollTracker from "./ScrollTracker";
import ThemePersister from "./ThemePersister";
import TypingIndicator from "./TypingIndicator";

const views = [
  { id: "home", label: "Home" },
  { id: "clock", label: "Clock" },
  { id: "typing", label: "Typing" },
  { id: "theme", label: "Theme" },
  { id: "scroll", label: "Scroll" },
  { id: "notes", label: "Notes" },
];

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <DocumenetTitle currentView={currentView} />
      <ScrollTracker />

      <main className="app-shell">
        <nav className="view-nav" aria-label="Phase 4 features">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              onClick={() => setCurrentView(view.id)}
              aria-pressed={currentView === view.id}
            >
              {view.label}
            </button>
          ))}
        </nav>

        {currentView === "home" && (
          <section className="feature-panel">
            <h1>Phase 4 Hooks Practice</h1>
            <p>
              Pick a feature above to test document titles, timers, typing
              state, persisted theme, and scroll tracking.
            </p>
          </section>
        )}

        {currentView === "clock" && (
          <section className="feature-panel">
            <Clock />
          </section>
        )}

        {currentView === "typing" && (
          <section className="feature-panel">
            <h1>Typing Indicator</h1>
            <TypingIndicator />
          </section>
        )}

        {currentView === "theme" && (
          <section className="feature-panel">
            <ThemePersister />
          </section>
        )}

        {currentView === "scroll" && (
          <section className="feature-panel tall-panel">
            <h1>Scroll Tracker</h1>
            <p>Scroll down this page and watch the progress bar at the top.</p>
            <p>
              This view is intentionally tall so the scroll progress feature has
              enough page height to measure.
            </p>
          </section>
        )}

        {currentView === "notes" && (
          <section className="feature-panel">
            <h1>Phase 4 Notes</h1>
            <p>
              Phase 4 covers lifecycle ideas and hooks like useEffect, useRef,
              useMemo, useCallback, useReducer, and custom hooks.
            </p>
          </section>
        )}
      </main>
    </>
  );
};

export default App;
