import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("Child component got re-rendered again");
  return (
    <div>
      <button onClick={props.handleClick}>{props.btnName}</button>
    </div>
  );
});

export default ChildComponent;
