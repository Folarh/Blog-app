import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">Blog</h2>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>About</li>
        <li>Contact</li> */}
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
      <ul className="user-in">
        <li>
          <Link to="/signup">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">REGISTER</Link>
        </li>
      </ul>
    </nav>
  );
}
