import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/admin.css';

// import { Container } from './styles';

function MyAccount() {
  return <div className='disp'>
 <Sidebar />
  <div className='admincontainer'>
   my account Page
  </div>
  </div>;
}

export default MyAccount;