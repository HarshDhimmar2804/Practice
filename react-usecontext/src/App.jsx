import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// const UserContext = createContext();

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Harsh" });
  const [theme, setTheme] = useState("light");
  return (
    // <div>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </div>
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "white" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
// export {UserContext}
export { ThemeContext };
