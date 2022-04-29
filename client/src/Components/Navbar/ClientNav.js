import React, { useState } from 'react';
import "../../Assets/css/clientnav.css";
import { NavLink, Link } from "react-router-dom";
import Popover from '@material-ui/core/Popover';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({


  pop: {
    marginRight: '40px',
    marginTop: '20px',
    color: '#8bc53f',
    width: '100%'
  }
  ,
  dv: {
    color: 'black'
  }

}));
function ClientNav() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <nav className="head">
      <div className="head-container">
        <Link to="/c/home" className="head-logo">
          Online Tunisian Banking
        </Link>
        <div>
          <Fab size="medium" color="default" aria-label="add" onClick={handleClick}>
            <PersonRoundedIcon /></Fab>
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
            <List component="nav" aria-label="secondary mailbox folder">


              <Link to='/c/account' className='lnk'>
                <ListItem button>
                  <ListItemText primary="My Account" />
                </ListItem>
                <Divider className={classes.dv} />
              </Link>
              <Link to='/' className='lnk'>
                <ListItem button onClick={(evt) => {
                  console.log('logout')
                  localStorage.setItem('token', "");
                  localStorage.setItem('connected', false);
                  window.location.replace("http://localhost:3000/")
                }} >
                  <ListItemText primary="Log out" />
                </ListItem>
              </Link>
            </List>
          </Popover>

        </div>
      </div>
    </nav>

  );
}

export default ClientNav;