import { useState } from "react";

function App() {
  console.debug("App component render");
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <div>
        <div>Counter value:</div>
        <div id="counter-view-value">{count}</div>
        <button id="increment-button" onClick={increment}>
          Add
        </button>
        <button id="decrement-button" onClick={decrement}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
