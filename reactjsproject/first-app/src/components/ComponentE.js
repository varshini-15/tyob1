import { useContext } from "react";
import ContextData from "./ContextApi";

function ComponentE() {
  const name = useContext(ContextData);
  console.log(name);
  return <h2>{name}ComponentE</h2>;
}
export default ComponentE;
