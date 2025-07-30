import { Link } from "react-router";

function Navbar() {
  return <nav>
    <Link to ="/">Inicio</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>;
}

export default Navbar;
