import React  from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../Assets/css/sidebar.css';
import { IconContext } from 'react-icons';


// import { Container } from './styles';

function Nav(sidebar,setSidebar) {
    const showSidebar = () => setSidebar(!sidebar);
  return  <IconContext.Provider>
  <div className='navbar'>
  <Link to='#' className='menu-bars'>
    <FaIcons.FaBars onClick={showSidebar} />
  </Link>
 
</div>
</IconContext.Provider>
}

export default Nav;