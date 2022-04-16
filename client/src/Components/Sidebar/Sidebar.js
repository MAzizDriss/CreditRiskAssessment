import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../Assets/css/sidebar.css';
import { IconContext } from 'react-icons';
import Popover from '@material-ui/core/Popover';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  but: {
    width:'5%',
    borderRadius:'50%',
    height:'60px',
    backgroundColor: "#21b6ae",
  },
  typography: {
    padding: theme.spacing(2),
  },
  pop:{
    marginTop:'15px',
   Color:'#8bc53f',
    width:'150%'
  }
  ,
  txt:{
    color:'black'
  }
 
}));
function Sidebar() {
  const classes=useStyles()
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
 

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 className='logo' >Online Tunisian Banking</h2>
          <div className='navbar avatar' >
            <div className='avatar'><IconContext.Provider value={{size:'25px',color:'#fff'}}><IoIcons.IoIosArrowDown  onClick={handleClick}/></IconContext.Provider>
       
      
              <Popover
                className={classes.pop}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                
              >
                <div >
                  <List component="nav" aria-label="secondary mailbox folder">
                    <Link to='/a' className='lnk'>
                      <ListItem button>
                      <ListItemText primary="My Account" />
                      </ListItem>
                    </Link>
                    <Link to='/' className='lnk'>
                      <ListItem button >
                        <ListItemText primary="Log out"  />
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </Popover>
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {sidebar ? <span className='sparta'>{item.title}</span> : <div></div>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;