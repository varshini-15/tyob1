import React from "react";

function childcompo({ currentVal }) {
  const name = "Varshini";
  currentVal(name);
  return <div>childcompo </div>;
}

export default childcompo;
