# React Concepts README

A complete guide covering fundamental React concepts including JSX, State vs Props, useState Hook, sharing state, and event handling.

---

## Table of Contents

- [1. JSX](#1-jsx)
- [2. State vs Props](#2-state-vs-props)
- [3. useState Hook](#3-usestate-hook)
- [4. Sharing State Between Components](#4-sharing-state-between-components)
- [5. Event Handling](#5-event-handling)

---

## 1. JSX

<details>
<summary>Click to expand</summary>

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows writing HTML-like code directly in JavaScript.  
It makes it easier to create and visualize React components.

**Why use JSX:**

- Makes code more readable and declarative.
- Defines the structure of UI clearly.
- Compiles to `React.createElement()` calls for rendering.

**Example:**

```jsx
const element = <h1>Hello, React!</h1>;
</details>
2. State vs Props
<details> <summary>Click to expand</summary>
Feature	Props	State
Definition	Pass data from parent to child components.	Store data that can change over time in a component.
Mutability	Read-only inside the component.	Mutable; can be updated using setState or useState.
Component Type	Works in both class & functional components.	Works in both class & functional components.
Purpose	Provide external input to a component.	Manage internal dynamic data.
</details>
3. useState Hook
<details> <summary>Click to expand</summary>

useState is a React Hook that allows functional components to have state.

It returns an array with:

Current state value

Function to update the state

Example:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

How it works:

useState(0) initializes the state variable count with 0.

setCount updates the state and triggers a re-render.

</details>
4. Sharing State Between Components
<details> <summary>Click to expand</summary>

State can be shared using:

Lifting State Up

Move state to the closest common parent.

Pass it as props to child components.

Context API

Provides global state access without prop drilling.

State Management Libraries

Examples: Redux, Zustand, MobX.

Example (Lifting State Up):

function Parent() {
  const [message, setMessage] = useState("Hello");

  return <Child message={message} />;
}

function Child({ message }) {
  return <h1>{message}</h1>;
}
</details>
5. Event Handling
<details> <summary>Click to expand</summary>

Events use camelCase (onClick, onChange) instead of lowercase HTML (onclick).

Pass functions as event handlers.

Example:

function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

Passing arguments to handlers:

<button onClick={() => handleClick("Hello")}>Click Me</button>
</details>
```
