import React, { useState } from "react";

function Parentcomp() {
  const [val, currentVal] = useState();
  return (
    <div>
      Parentcomp
      {val}
      <childcomp data={currentVal} />
    </div>
  );
}

export default Parentcomp;
