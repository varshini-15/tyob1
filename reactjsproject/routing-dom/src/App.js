import "./App.css";
// import LoginComponent from "./components/LoginComponent";
import NavBar from "./components/NavBar"; //FuncCompo name shouldn't conflict with builtin names
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/" element={<h1>This is Home Page</h1>}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Dashboard></Dashboard>

      {/* <LoginComponent /> */}
    </div>
  );
}

export default App;
