import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/sidebar.css';
// import { Container } from './styles';

function Dashboard() {
  return <>
  <Sidebar />
  <div className='admincontainer'>
   Dashboard Page
  </div>
  </>;
}

export default Dashboard;