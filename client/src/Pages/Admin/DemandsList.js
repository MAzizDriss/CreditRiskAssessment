import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/admin.css';
import RTable from '../../Components/RequestTable/Table';
// import { Container } from './styles';

function DemandsList() {
  return<div className='disp'>
  <Sidebar />
  <div className='admincontainer'>
   <RTable/>
  </div>
  </div>;
}

export default DemandsList;