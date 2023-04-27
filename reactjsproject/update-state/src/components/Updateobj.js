import React, { useState } from "react";

function Updateobj() {
  const [count, setcount] = useState({ data: 0 });
  const handleUpdate = () => {
    setcount({ ...count, data: count.data + 1 });
  };
  return (
    <div>
      <h1>{count.data}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Updateobj;
