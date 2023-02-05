import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function MenuBurger() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="burger-button"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"} Menu
      </button>
      {open && (
        <ul className="navbar-burger">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Record</Link>
          </li>
          <li>
            <Link to="/dreams">My dreams</Link>
          </li>
          <li>
            <Link to="/profile">My profile</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MenuBurger;
