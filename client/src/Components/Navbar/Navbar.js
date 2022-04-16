import React , { useState } from 'react';
import "../../Assets/css/Navbar.css";
import {  AiOutlineClose ,AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar () {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
      return  (
        <nav className="Navbar">
        <div className="Nav-container">
          <NavLink exact to="/" className="Nav-logo">
            Online Tunisian Banking
           
          </NavLink>

          <ul className={click ? "Nav-menu active" : "Nav-menu"}>
            <li className="Nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="Nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="Nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="Nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="Nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="Nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="Nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="Nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="Nav-icon" onClick={handleClick}>
          {click ? < AiOutlineClose/>  : <AiOutlineMenu/>}
          </div>
        </div>
    </nav>
  
);
}

export default Navbar;