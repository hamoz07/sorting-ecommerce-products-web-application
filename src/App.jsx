import "./index.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import Err404 from "./components/Err404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="/*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
