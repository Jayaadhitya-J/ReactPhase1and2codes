# React JS: Phase 4 Notes

In this phase, we are learning about the component lifecycle and React hooks like `useEffect`, `useState`, `useMemo`, `useCallback`, `useRef`, `useReducer`, and custom hooks.

---

## 1. Component Lifecycle

The component lifecycle means the different stages a component goes through while it exists on the screen.

### Main Lifecycle Stages

| Stage | Meaning |
| --- | --- |
| **Mounting** | When a component is created and shown on the screen for the first time. |
| **Updating** | When a component re-renders because its state or props changed. |
| **Unmounting** | When a component is removed from the screen. |

In older class components, React had lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

In modern functional components, we usually handle lifecycle-related work using hooks, especially `useEffect`.

---

## 2. Hooks

Hooks are special React functions that let functional components use React features.

For example, hooks let components:

- Store and update state
- Run side effects
- Remember values between renders
- Access DOM elements
- Manage more complex state logic
- Reuse logic across components

### Common Hooks

| Hook | Main Use |
| --- | --- |
| `useState` | Store and update simple state |
| `useEffect` | Run side effects |
| `useMemo` | Remember a calculated value |
| `useCallback` | Remember a function |
| `useRef` | Store a value without causing a re-render |
| `useReducer` | Manage complex state with a reducer function |

---

## 3. Rules of Hooks

React hooks must follow a few important rules.

### Important Rules

- Call hooks only at the top level of a component or custom hook.
- Do not call hooks inside loops, conditions, or nested functions.
- Call hooks only from React function components or custom hooks.
- Do not modify state directly.
- State updates can be asynchronous.
- State can store any type of value, such as strings, numbers, arrays, objects, or booleans.
- Use the previous state value when the new state depends on the old state.

### Correct Hook Usage

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Count is {count}
        </button>
    );
}
```

Here, `useState` is called at the top level of the component, and the state update uses the previous value.

---

## 4. `useState`

`useState` is the most basic React hook.

It lets a component remember data and update the UI when that data changes.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

| Part | Meaning |
| --- | --- |
| `state` | The current state value |
| `setState` | The function used to update the state |
| `initialValue` | The value used during the first render |

### Example

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
        </>
    );
}
```

### Updating Objects in State

Do not change objects directly. Create a new object instead.

```jsx
const [user, setUser] = useState({ name: "Jay", age: 20 });

setUser((prevUser) => ({
    ...prevUser,
    age: 21,
}));
```

The spread operator `...prevUser` copies the existing values first, then updates only the value we want to change.

---

## 5. `useEffect`

`useEffect` lets us run extra code after React renders the component.

This extra code is called a **side effect**.

### Common Uses

- Fetching data from an API
- Setting up timers
- Listening to browser events
- Updating the document title
- Cleaning up subscriptions, timers, or event listeners

### Syntax

```jsx
useEffect(() => {
    // Code runs after render.
}, [dependencies]);
```

### Example

```jsx
import { useEffect, useState } from "react";

function CounterTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Count is {count}
        </button>
    );
}
```

Here, the effect runs again whenever `count` changes.

---

## 6. Dependency Array in `useEffect`

The dependency array controls when an effect runs.

| Dependency Array | When the Effect Runs |
| --- | --- |
| `[]` | Runs only after the first render. |
| `[value]` | Runs after the first render and again whenever `value` changes. |
| No dependency array | Runs after every render. |

### Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

This runs only once after the component first appears on the screen.

### With Dependencies

```jsx
useEffect(() => {
    console.log("Search text changed");
}, [searchText]);
```

This runs when the component first renders and whenever `searchText` changes.

### No Dependency Array

```jsx
useEffect(() => {
    console.log("This runs after every render");
});
```

Use this carefully because it can run very often.

---

## 7. Cleanup in `useEffect`

Some effects need cleanup when the component unmounts or before the effect runs again.

For cleanup, return a function from inside `useEffect`.

### Timer Cleanup Example

```jsx
import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <p>Seconds: {seconds}</p>;
}
```

The cleanup function stops the timer when the component is removed from the screen.

### Event Listener Cleanup Example

```jsx
useEffect(() => {
    function handleResize() {
        console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);
```

This prevents old event listeners from staying active after the component is gone.

---

## 8. `useMemo`

`useMemo` remembers a calculated value between renders.

It recomputes the value only when one of its dependencies changes.

### Syntax

```jsx
const value = useMemo(() => {
    return result;
}, [dependencies]);
```

### Example

```jsx
import { useMemo, useState } from "react";

function NumberList({ numbers }) {
    const [showEvenOnly, setShowEvenOnly] = useState(false);

    const visibleNumbers = useMemo(() => {
        if (showEvenOnly) {
            return numbers.filter((number) => number % 2 === 0);
        }

        return numbers;
    }, [numbers, showEvenOnly]);

    return (
        <>
            <button onClick={() => setShowEvenOnly((prev) => !prev)}>
                Toggle Even Numbers
            </button>

            <ul>
                {visibleNumbers.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </>
    );
}
```

### Important Note

Use `useMemo` mainly when a calculation is expensive or when keeping the same reference helps avoid unnecessary work.

Do not use it for every small calculation.

---

## 9. `useCallback`

`useCallback` remembers a function between renders.

It creates a new function only when one of its dependencies changes.

### Syntax

```jsx
const fn = useCallback(() => {
    // Function code
}, [dependencies]);
```

### Example

```jsx
import { useCallback, useState } from "react";

function CounterButton() {
    const [count, setCount] = useState(0);

    const increaseCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <button onClick={increaseCount}>
            Count is {count}
        </button>
    );
}
```

### `useMemo` vs `useCallback`

| Hook | Remembers |
| --- | --- |
| `useMemo` | A calculated value |
| `useCallback` | A function |

---

## 10. `useRef`

`useRef` stores a value that React remembers between renders.

Changing a ref does **not** cause the component to re-render.

### Syntax

```jsx
const ref = useRef(initialValue);
```

The value is stored in:

```jsx
ref.current
```

### Remembering a Value

```jsx
import { useRef } from "react";

function ClickCounter() {
    const clickCount = useRef(0);

    function handleClick() {
        clickCount.current += 1;
        console.log(clickCount.current);
    }

    return <button onClick={handleClick}>Click</button>;
}
```

The value changes, but the component does not re-render.

### Accessing a DOM Element

```jsx
import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
```

Here, `inputRef.current` points to the real input element in the browser.

---

## 11. `useReducer`

`useReducer` manages state using a reducer function.

Instead of directly deciding the next state inside the event handler, we dispatch an action. The reducer then decides how the state should change.

This is useful when state logic becomes more complex.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

| Part | Meaning |
| --- | --- |
| `state` | The current state |
| `dispatch` | The function used to send an action |
| `reducer` | The function that decides the next state |
| `initialState` | The starting state |

### Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 };
        case "decrease":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increase" })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: "decrease" })}>
                Decrease
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </>
    );
}
```

### `useState` vs `useReducer`

| Hook | Best For |
| --- | --- |
| `useState` | Simple state updates |
| `useReducer` | Complex state logic with multiple actions |

---

## 12. Custom Hooks

A custom hook is a function that uses one or more React hooks.

Custom hooks help us reuse logic across multiple components.

### Important Rule

A custom hook's name should start with `use`.

Examples:

- `useFetch`
- `useLocalStorage`
- `useWindowSize`
- `useOnlineStatus`

### Syntax

```jsx
function useSomething() {
    // Use hooks here.
    return something;
}
```

### Example

```jsx
import { useEffect, useState } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width;
}

function App() {
    const width = useWindowWidth();

    return <p>Window width: {width}</p>;
}
```

Here, `useWindowWidth` is a custom hook because it uses other hooks and starts with `use`.

---

## 13. Quick Revision

| Topic | Remember This |
| --- | --- |
| Lifecycle | Components mount, update, and unmount. |
| Hooks | Hooks let functional components use React features. |
| `useState` | Stores state and re-renders the component when updated. |
| `useEffect` | Runs side effects after rendering. |
| Dependency array | Controls when `useEffect` runs. |
| Cleanup | Removes timers, listeners, or subscriptions. |
| `useMemo` | Remembers a calculated value. |
| `useCallback` | Remembers a function. |
| `useRef` | Remembers a value without causing a re-render. |
| `useReducer` | Manages complex state with actions and a reducer. |
| Custom hooks | Reuse hook logic between components. |

