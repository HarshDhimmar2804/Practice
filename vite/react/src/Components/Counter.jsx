import { useState } from "react";

//For Usestate
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col bg-slate-300 items-center justify-center">
      <p className="font-extrabold text-5xl m-5">
        You clicked button {count} time.
      </p>
      <button
        className="text-lg bg-blue-500 px-5 py-2 rounded-lg text-white hover:bg-blue-800"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Counter;
