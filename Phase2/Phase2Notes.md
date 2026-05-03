# React JS: Phase 2 Notes

In this phase, we are learning about components, props, children props, state, and the `useState` Hook.

---

## 1. Components

Components are the **building blocks of a UI**.

They help us split a user interface into smaller, reusable pieces.

### Why Components Are Useful

- Reusable
- Easier to understand
- Easier to maintain
- Focused on one purpose
- Usually written as functional components in modern React

### A Good Component Should Have

| Quality | Meaning |
| --- | --- |
| **Clear purpose** | The component should do one main thing. |
| **Meaningful name** | The name should explain what the component represents. |
| **Reusable structure** | The component should be useful in more than one place. |
| **Minimal complexity** | The component should be easy to read and understand. |

### Exporting Components

To use a component in another file, it must be exported.

There are two common types of exports:

| Export Type | Use Case |
| --- | --- |
| **Named export** | Used when exporting multiple things from one file. |
| **Default export** | Used when exporting one main thing from a file. |

---

## 2. Props

Props are similar to **properties**.

They are used to pass information from one component to another.

```text
Parent component -> Child component
```

Props help make components reusable because the same component can show different data.

---

## 3. Basic Props

Basic props are the normal way of passing data from a parent component to a child component.

```jsx
function UserCard(props) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </>
    );
}

export default UserCard;
```

### Usage

```jsx
<UserCard name="Jay" age={22} />
```

---

## 4. Destructured Props

Instead of writing `props.name` and `props.age`, we can directly extract the prop names.

This is called **destructuring**.

```jsx
function UserCard({ name, age }) {
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
        </>
    );
}

export default UserCard;
```

### Why Destructuring Is Useful

- Cleaner syntax
- Easier to read
- Easier to debug

### Usage

```jsx
<UserCard name="Jay" age={22} />
```

---

## 5. Default Props

Default props are used when we want a prop to have a fallback value.

If the parent does not pass a value, the default value is used.

```jsx
function UserCard({ name = "Jay", age }) {
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
        </>
    );
}

export default UserCard;
```

### Usage

```jsx
<UserCard age={22} />
```

In this example, the name will be `"Jay"` because no `name` prop was passed.

---

## 6. Children Props

`children` means whatever we put **inside a component's opening and closing tags**.

Think of it like this:

```text
Component = photo frame
children = picture inside the frame
```

```jsx
function UserCard({ name = "Jay", age, children }) {
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <div>{children}</div>
        </>
    );
}

export default UserCard;
```

### Usage

```jsx
<UserCard name="Jay" age={22}>
    <p>This text is passed as children.</p>
</UserCard>
```

The content inside `<UserCard>...</UserCard>` becomes the `children` prop.

---

## 7. Other Important Things About Props

| Topic | Meaning |
| --- | --- |
| `...props` | Collects all props and passes them forward. |
| `...rest` | Takes the props you need and stores the remaining props separately. |
| Components as props | A component can be passed as a prop to another component. |
| Prop drilling | Passing data through many levels, such as `App -> Parent -> Child -> Grandchild`. |

---

## 8. State

State is **data that changes over time**.

In simple words, state is the memory of a component.

State is also the **source of truth** for what the UI is showing.

For example:

- A counter value
- A form input value
- Whether a menu is open or closed
- A list of items

---

## 9. `useState` Hook

The `useState` Hook lets functional components manage state.

It tells React:

> "Next time this component renders, use this updated value."

### Basic Syntax

```jsx
const [value, setValue] = useState(initialValue);
```

Example:

```jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

export default Counter;
```

It is called a Hook because it lets us **hook into React features**, such as state and lifecycle behavior.

---

## 10. Rules of `useState`

- Never mutate state directly.
- Always use the setter function to update state.
- Use functional updates when the new value depends on the previous value.
- Each render has its own snapshot of state.
- Use multiple state variables when it makes the code cleaner.
- State can store strings, numbers, booleans, arrays, objects, and more.

### Functional Update Example

Use this when the new value depends on the previous value:

```jsx
setCount((prev) => prev + 1);
```

Avoid relying on the current variable when multiple updates may happen quickly:

```jsx
setCount(count + 1);
```

---

## 11. State vs Props

| Topic | State | Props |
| --- | --- | --- |
| **Where it comes from** | Managed inside the component | Passed from parent to child |
| **Can it change?** | Yes, using the setter function | No, props should be treated as immutable |
| **Main purpose** | Handles dynamic data | Sends data into components |
| **Direction** | Stays inside the component unless passed down | Flows one way from parent to child |

### Quick Difference

```text
Props = data given to a component
State = data remembered by a component
```
