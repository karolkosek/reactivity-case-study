import { useState } from "react";

function App() {
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

const AppWrapper = () => {
  console.log(
    <div>
      <h1>Hello!</h1>
    </div>
  );

  return (
    <div>
      <App />
    </div>
  );
};

export default AppWrapper;
