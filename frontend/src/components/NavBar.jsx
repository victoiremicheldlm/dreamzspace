import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Record</Link>
        </li>
        <li>
          <Link to="/dreams">My dreams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
