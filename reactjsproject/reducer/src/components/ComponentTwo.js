import React, { useEffect } from "react";
import { useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  data: {},
  err: "",
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        ...prevState,
        loading: false,
        data: action.payload,
      };
    case "fetch_error":
      return {
        ...prevState,
        loading: true,
        data: action.payload,
      };
    default:
      return prevState;
  }
};

const ComponentTwo = () => {
  useEffect(() => {
    console.log("effect");
    fetchData();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        ` https://jsonplaceholder.typicode.com/users/3`
      );
      console.log(response.data.data);
      dispatch({ type: "fetch_success", payload: response.data }); //update values
    } catch (err) {
      dispatch({ type: "fetch_error", payload: err });
    }
  };
  if (state.loading) {
    return <h1>Loading...</h1>;
  }
  if (state.err) {
    return <p>{state.err}</p>;
  }
  return <h2>{state.data}</h2>;
};

export default ComponentTwo;
