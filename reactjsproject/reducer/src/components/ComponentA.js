import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  console.log("Component A executed");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 5);
  };
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <ComponentB />
    </div>
  );
}

export default React.memo(ComponentA);
