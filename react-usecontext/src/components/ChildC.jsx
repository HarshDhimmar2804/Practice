import { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  // const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
  // <div>Data: {user.name}</div>;
};

export default ChildC;
