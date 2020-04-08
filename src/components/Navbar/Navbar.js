import React from "react";
import "./navbar.scss";

const Navbar = () => {
 return (
   <div className="navbar">
    <nav>
     <ul className="navbar-main">
      <li><a href="#">Link A</a></li>
      <li><a href="#">Link B</a></li>
      <li><a href="#">Link C</a></li>
      <li><a href="#">Link D</a></li>
      <li><a href="#">Link E</a></li>
     </ul>
    </nav>
   </div>
 );
};

export default Navbar;
