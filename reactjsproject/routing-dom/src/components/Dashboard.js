import React, { useState } from "react";

function Dashboard() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>{state}</h1>
      <br></br>
      <button
        onClick={() => {
          setState(state + 5);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setState(state - 5);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setState(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Dashboard;
