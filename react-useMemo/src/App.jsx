import { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const expensiveTask = (num) => {
    console.log("Inside expensive task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };
  let doubleVal = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increment</button>
      <input
        type="number"
        value={input}
        placeholder="Enter the number"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double: {doubleVal}</div>
    </div>
  );
};

export default App;
