import React from "react";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";

function ComponentB() {
  console.log("Component B executed");
  return (
    <div>
      ComponentB
      <ComponentC />
      <ComponentD />
    </div>
  );
}

export default React.memo(ComponentB);
