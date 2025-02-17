import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // useEffect(() => {
  //   alert("useEffect called");
  // });

  // useEffect(() => {
  //   alert("useEffect called");
  // }, []);

  // useEffect(() => {
  //   alert("useEffect called");
  // }, [count]);

  // useEffect(() => {
  //   alert("useEffect called");
  // }, [count, total]);

  useEffect(() => {
    alert("Count is updated");

    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickTotal = () => {
    setTotal(total + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <br />
      Count : {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is : {total}
    </div>
  );
}

export default App;
