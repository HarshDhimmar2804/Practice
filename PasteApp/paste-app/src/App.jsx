import { createBrowserRouter } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/pastes",
    element: <div></div>,
  },
  {
    path: "/pastes/:id",
    element: <div></div>,
  },
]);

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </div>
  );
}

export default App;
