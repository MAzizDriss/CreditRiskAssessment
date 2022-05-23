import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons/lib';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Demands List',
    path: '/admin/dlist',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'My Account',
    path: '/admin/account',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <div onClick={(evt)=>{
      console.log('logout')
      localStorage.setItem('token', "");
      localStorage.setItem('connected', false);
      window.location.replace("http://localhost:3000/")
    }}><IconContext.Provider value={{size:'22px'}} ><IoIcons.IoMdExit style={{marginLeft:'-3px'}}/>
    </IconContext.Provider></div>,
    cName: 'nav-text'
  }
];
