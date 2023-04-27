import React from "react";
import hocount from "./CountFunc";

function Increment({ count, increment }) {
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 5);
  //   };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>On Click</button>
    </div>
  );
}

export default hocount(Increment);
