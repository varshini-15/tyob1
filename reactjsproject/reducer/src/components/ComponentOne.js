import React from "react";
import { useReducer } from "react";
const initialState = {
  firstCounter: 0,
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter + action.payload,
      };
    case "decrement":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter - action.payload,
      };
    case "reset":
      return {
        ...prevState,
        firstCounter: action.payload,
      };
  }
};
const ComponentOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state.firstCounter}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 5 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentOne;
