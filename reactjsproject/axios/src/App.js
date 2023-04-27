import "./App.css";
import EditComponent from "./components/EditComponent";
// import AddProducts from "./components/AddProducts";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Products />
      {/* <EditComponent /> */}
    </div>
  );
}

export default App;
