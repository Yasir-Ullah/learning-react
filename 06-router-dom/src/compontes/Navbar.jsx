import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="red" to="/home">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="red" to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="red" to="/user">
            User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
