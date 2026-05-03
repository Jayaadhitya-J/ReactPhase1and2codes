# React JS: Phase 1 Notes

In this phase, we are learning the core philosophy of React, why React is useful, the main ways to set up a React app, and the basics of JSX.

---

## 1. What Is React?

React is a **JavaScript library for building user interfaces**.

### Key Advantages

| Feature | Meaning |
| --- | --- |
| **Modular** | The UI is broken into smaller reusable pieces called components. |
| **Declarative** | We tell React what the UI should look like, and React handles the updates. |
| **Virtual DOM** | React compares UI changes efficiently before updating the real DOM. |

React was developed by **Facebook** and released in **2013**.

The current major version is **React 19**. React's latest official docs are maintained for the current major version.

---

## 2. Declarative vs Imperative Code

### Declarative

In declarative code, we describe **what we want**.

> Example: "Show this button when the user is logged in."

React handles the steps needed to update the UI.

### Imperative

In imperative code, we describe **each step**.

> Example: "Get the element by ID, change its text, add this class, then update the style."

Declarative code is usually easier to read, understand, and maintain, especially for complex interfaces.

---

## 3. Component-Based Architecture

A **component** is a reusable and independent part of the UI.

For example, on Amazon, each product card may follow the same layout, but the product image, title, price, and rating change.

Good React components should be:

- Focused on one purpose
- Reusable
- Readable
- Not too long
- Easy to compose with other components

### Types of Components

| Component Type | Notes |
| --- | --- |
| **Functional components** | Preferred in modern React. They use Hooks to manage state, side effects, and other behavior. |
| **Class components** | Older style of React component. They use `this` and lifecycle methods, and are mostly found in legacy codebases. |

---

## 4. React 19 Highlights

React 19 includes improvements such as:

- Better server-side rendering support
- Improvements around Suspense
- New and improved Hooks APIs
- Better integration with modern web standards
- More efficient batching and rendering behavior

---

## 5. Unidirectional Data Flow

Data in React flows in **one direction**:

```text
Parent component -> Child component
```

The parent owns the data, and the child receives it through **props**.

### Why This Helps

- Better predictability
- Easier debugging
- Clearer contracts between components

A child component can still trigger changes in the parent by calling a function passed down from the parent.

---

## 6. DOM in React

DOM stands for **Document Object Model**.

In React, the developer usually does not manipulate the DOM directly. React handles DOM updates for us.

### How React Updates the UI

```text
New virtual DOM representation
        |
        v
Compare with previous virtual DOM
        |
        v
Find what changed
        |
        v
Update only the changed parts of the real DOM
```

### Note

A highly optimized vanilla JavaScript app can sometimes beat React in raw performance because it avoids abstraction overhead.

However, React is often better for real-world UI development because it is more organized, scalable, and developer-friendly.

---

## 7. Vanilla JavaScript vs React

| Topic | Vanilla JavaScript | React |
| --- | --- | --- |
| **UI** | Uses HTML and JavaScript directly | Uses JSX |
| **DOM** | Manual DOM manipulation | Uses a virtual DOM |
| **Code style** | More imperative | More declarative |
| **Reusability** | Less reusable by default | Highly reusable with components |
| **State** | Manually managed | Built-in state management tools |
| **Changes** | Developer manually handles updates | React handles updates dynamically |
| **Performance** | Good for small apps | Better suited for larger, complex apps |

---

## 8. Ways to Create a React App

There are three common approaches:

1. **Frameworks**
2. **Build tools**
3. **Create React App**

### Frameworks

Frameworks are used for full-stack development and production-ready apps.

Examples include **Next.js** and **Remix**.

They usually provide:

- SEO optimization
- Server-side rendering and client-side rendering
- File-based routing
- Backend features
- Convention over configuration
- Deployment support through platforms like Vercel or Node-based hosting

### Build Tools

Build tools, such as **Vite**, are lightweight and customizable.

They usually provide:

- Faster setup
- More customization
- Client-side rendering by default
- Routing through external libraries
- Builds powered by tools like esbuild
- Static deployment through platforms like GitHub Pages, Netlify, or Vercel

### Create React App

Create React App is now **deprecated**.

It provided:

- Zero-configuration setup
- Webpack-based builds
- Client-side rendering only
- External routing libraries
- Static deployment

Its SEO support is weak compared to modern React frameworks.

---

## 9. CSR vs SSR

### CSR: Client-Side Rendering

In CSR, the browser builds the page.

```text
Request -> Empty HTML -> JavaScript loads -> React renders the UI
```

### SSR: Server-Side Rendering

In SSR, the server builds the page first.

```text
Request -> Server builds HTML -> Browser shows content -> JavaScript loads for interactivity
```

---

## 10. Component Lifecycle

A component generally goes through these stages:

```text
Initialization -> Mounting -> Updating -> Unmounting
```

| Stage | Meaning |
| --- | --- |
| **Initialization** | The component is prepared with its initial data. |
| **Mounting** | The component appears on the screen. |
| **Updating** | The component changes because of new props or state. |
| **Unmounting** | The component is removed from the screen. |

---

## 11. JSX

JSX stands for **JavaScript XML**.

JSX lets us write UI that looks similar to HTML inside JavaScript.

```text
JSX -> Compiled by Babel -> React creates virtual DOM -> Real DOM is updated
```

### JSX Rules

- Return a single JSX element.
- Close all tags.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- Write JavaScript inside `{}`.
- Write inline styles as objects.
- Use fragments (`<>...</>`) when you do not need an extra `div`.

Browsers understand only HTML, CSS, and JavaScript. JSX must be converted before rendering.

---

## 12. JavaScript vs TypeScript

JavaScript is easier to learn and beginner-friendly.

TypeScript is usually preferred in larger projects because it adds type safety and helps catch errors earlier.

---

## 13. Common Project Files

| File | Purpose |
| --- | --- |
| `package.json` | Project manifest for npm. It contains dependencies and scripts. |
| `package-lock.json` | Stores exact dependency versions. |
| `index.html` | Single HTML file and entry point for the app. |
| `vite.config.js` | Vite build and development configuration. |
| `eslint.config.js` | Quality and linting rules. |
