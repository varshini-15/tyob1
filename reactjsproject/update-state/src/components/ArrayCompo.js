import React, { useState } from "react";

function ArrayCompo() {
  const [val, setVal] = useState([]);
  const handleUpdate = () => {
    let result = [...val]; //everytime a new array is created with that pushed value
    result.push(1);
    setVal(result);
    console.log(val);
  };

  return (
    <div>
      <button onClick={handleUpdate}>Clickme</button>
      {
        // for accessing values
        val.map((value) => {
          return <li>{value}</li>;
        })
      }
    </div>
  );
}

export default ArrayCompo;
