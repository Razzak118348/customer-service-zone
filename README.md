## 1. JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code directly in JavaScript.  
# It makes it easier to create and visualize React components.
## Why use JSX:
- Makes code more readable and declarative.
- Defines the structure of UI clearly.
- Compiles to `React.createElement()` calls for rendering.

## 2. State vs Props

| Feature        | Props                                    | State                                         |
|----------------|-----------------------------------------|-----------------------------------------------|
| Definition     | Pass data from parent to child components. | Store data that can change over time in a component. |
| Mutability     | Read-only inside the component.          | Mutable; can be updated using `setState` or `useState`. |
| Component Type | Works in both class & functional components. | Works in both class & functional components. |
| Purpose        | Provide external input to a component.  | Manage internal dynamic data.                |

## 3. useState Hook

### useState is a React Hook that allows functional components to have state.

It returns an array with:  
1. Current state value  
2. Function to update the state  

**Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## 4. Sharing State Between Components

State can be shared using:

### 1. Lifting State Up
- Move state to the closest common parent.  
- Pass it as props to child components.

### 2. Context API
- Provides global state access without prop drilling.

### 3. State Management Libraries
- Examples: **Redux**, **Zustand**, **MobX**.

## Example (Lifting State Up):
```jsx
import React, { useState } from 'react';

function Parent() {
  const [message, setMessage] = useState("Hello");

  return <Child message={message} />;
}

function Child({ message }) {
  return <h1>{message}</h1>;
}
```

## 5. Event Handling

- Events use camelCase (`onClick`, `onChange`) instead of lowercase HTML (`onclick`).  
- Pass functions as event handlers.

## Example:
```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

```