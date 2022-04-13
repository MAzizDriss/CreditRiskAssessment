import React from 'react';
import "../../Assets/css/Navbar.css";

function Navbar () {
  return (
    <div className='header'>
      <h1 >Online Tunisian Banking</h1>
     
      <div>
        <ul className='nav_link'>
          
          <li><a className='a' href ="#">About Us</a></li>
          <li><a className='a'  href ="#">Our Services</a></li>
          <li><a className='a' href ="#">Contact Us</a></li>
          
        </ul>
      </div> 
      
    </div>
  )
}

export default Navbar;
<img className='logo'  src="../logo.svg" alt ="Online Banking"/>