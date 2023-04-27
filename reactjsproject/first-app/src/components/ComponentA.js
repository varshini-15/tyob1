import ComponentB from "./ComponentB";
import { Provider } from "./ContextApi";
function ComponentA() {
  const name = "Varshini";
  return (
    <p>
      ComponentA
      <Provider value={name}>
        <ComponentB />
      </Provider>
    </p>
  );
}
export default ComponentA;
