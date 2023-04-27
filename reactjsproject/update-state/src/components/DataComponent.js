import React, { useState } from "react";

function DataComponent() {
  const [curVal, setCurVal] = useState(100);

  const handleClick = () => {
    setCurVal(curVal - 1);
  };
  const handleReset = () => {
    setCurVal(100);
  };
  return (
    <div>
      <h1>{curVal}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DataComponent;
