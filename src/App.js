import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
