import React from "react";

function ComponentC() {
  console.log("Component C executed");
  return <div>ComponentC</div>;
}

export default React.memo(ComponentC);
