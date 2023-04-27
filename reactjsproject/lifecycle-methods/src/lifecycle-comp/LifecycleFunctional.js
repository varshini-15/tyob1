import React, { useEffect, useState } from "react";

function LifecycleFunctional() {
  useEffect(() => {
    console.log("use effect - mounting phase");
  }, []);
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("Updating phase");
    console.log(state);
  }, [state]);
  useEffect(() => {
    console.log("use effect - unmounting phase");
    return console.log("asdfghj");
  }, []);
  return (
    <div>
      LifecycleFunctional
      <button
        onClick={() => {
          setState("Varsh");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default LifecycleFunctional;
