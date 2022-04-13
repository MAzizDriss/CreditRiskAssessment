import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/a/dash',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Demands List',
    path: '/a/list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'My Account',
    path: '/a/account',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Inbox',
    path: '/a/inbox',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <IconContext.Provider value={{size:'22px'}}><IoIcons.IoMdExit style={{marginLeft:'-3px'}}/></IconContext.Provider>,
    cName: 'nav-text'
  }
];