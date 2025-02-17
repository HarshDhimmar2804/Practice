import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);
  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setTime(time=>time + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();
  // const handleClick = () => {
  //   val.current = val.current + 1;
  //   console.log("Useref value", val.current);

  //   setCount(count + 1);
  // };
  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = "red";
  // };

  return (
    <div>
      <h1>Stopwatch : {time} second</h1>
      <button onClick={handleStart}>Start</button>
      <br />
      <br />

      <button onClick={handleStop}>Stop</button>
      <br />
      <br />

      <button onClick={handleReset}>Reset</button>
      <br />
      <br />

      {/* <button ref={btnRef} onClick={handleClick}>
        Click Me!
      </button>
      <p>{count}</p>
      <br />
      <br />
      <button onClick={changeColor}>Change color of 1st button</button> */}
    </div>
  );
}

export default App;
