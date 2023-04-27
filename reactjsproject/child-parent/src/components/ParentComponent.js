import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [currentval, setCurrentval] = useState("");
  console.log(currentval);
  // const childData = (info) => {
  //   setCurrentval(info);
  // };
  return (
    <div>
      <p>{currentval}</p>

      <ChildComponent childData={setCurrentval} />
      {/* // (1)setCurrentval no childData */}
    </div>
  );
}

export default ParentComponent;

// {
//   /* <input
//   onChange={(e) => {
//     setCurrentval(e.target.value);
//   }}
// ></input>; */
// }
