import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
