import React from "react";

function ChildComponent({ setCurrentval }) {
  // props or (1)setCurrentval
  //{ childData }
  const name = "Varshini";
  // props.name;
  setCurrentVal(name);
  // childData(name);
  //(1)setCurrentval(name)
  return <div>ChildComponent</div>;
}

export default ChildComponent;
