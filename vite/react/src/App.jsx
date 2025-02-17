import { useState } from "react";
import Card from "./Components/Card";
import Counter from "./Components/Counter";
import Usercard from "./Components/Usercard";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";

function App() {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //if-else rendering
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  //early rendering
  if (!isLoggedIn) {
    return <LoginBtn />;
  }

  return (
    <div>
      {/* terniry operator rendering */}
      {/* {isLoggedIn ? <LogoutBtn /> : <LoginBtn />} */}
      {/* logical rendering */}
      <div>{isLoggedIn && <LogoutBtn />}</div>
      <Counter />
      <Usercard name="Harsh" desc="Hello Harsh" />
      <Usercard name="Ram" desc="Hello Ram" />
      <Usercard name="Geeta" desc="Hello Geeta" />
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <p className="font-bold text-3xl">
        I am inside parent component and value of name is {name}
      </p>
    </div>
  );
}

export default App;
