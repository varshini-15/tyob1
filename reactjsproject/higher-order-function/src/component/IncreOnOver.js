import React from "react";
import hocount from "./CountFunc";

function IncreOnOver({ count, increment }) {
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 5);
  //   };
  return (
    <div>
      <h1>{count}</h1>
      <button onMouseOver={increment}>On mouse Over</button>
    </div>
  );
}

export default hocount(IncreOnOver);
