// import { useCallback, useState } from "react";
import "./App.css";
// import ChildComponent from "./components/ChildComponent";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, []);
  return (
    <div>
      {/* <p>Count : {count}</p>
      <button onClick={handleClick}>Increase</button>
      <br />
      <br />
      <div>
        <ChildComponent btnName="Click Me!" handleClick={handleClick} />
      </div> */}
      <ExpensiveComponent />
    </div>
  );
}

export default App;
