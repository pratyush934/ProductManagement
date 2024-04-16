import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Edit from "./components/EditProduct";
import NavBarComponent from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
