import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src="images/logo.png" alt="logo" />
        Pasal
      </div>

      <div className="nav-menu">
        <ul className="nav-list">
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/Products">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/Account">
              Account
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <img className="logo" src="images/cart.png" alt="cart"></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
