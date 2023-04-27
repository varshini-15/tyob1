import React, { useState } from "react";

let hocount = (RappingComp) => {
  function CountFunc() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 5);
    };
    return <RappingComp count={count} increment={increment} />;
  }
  return CountFunc;
};
export default hocount;
