import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/sidebar.css';

// import { Container } from './styles';

function MyAccount() {
  return <>
 <Sidebar />
  <div className='admincontainer'>
   my account Page
  </div>
  </>;
}

export default MyAccount;