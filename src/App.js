import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Shoecare from "./Pages/Shoecare";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/shoecare"> Shoecare </Link>
        <Link to="/Signup"> Signup </Link>
        <Link to="/Login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoecare" element={<Shoecare />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
