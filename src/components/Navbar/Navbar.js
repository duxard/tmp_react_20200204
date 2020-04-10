import React from "react";
import { NavLink, Link } from 'react-router-dom';
import "./navbar.scss";

const Navbar = () => {
 return (
   <div className="navbar">
    <nav>
      <input type="checkbox" id="menu" className="navbar-checkbox" />
      <label htmlFor="menu" className="navbar-label">Menu</label>
      <ul className="navbar-main">
        <li><NavLink to="/">Home page</NavLink></li>
        <li><NavLink to="/heroku">Heroku</NavLink></li>
        <li><NavLink to="/dummya">Page A</NavLink></li>
        <li><NavLink to="/dummyb">Page B</NavLink></li>
        <li><NavLink to="/dummyc">Page C</NavLink></li>
      </ul>
    </nav>
   </div>
 );
};

export default Navbar;
