import React from 'react';
import ClientDemandeForm from '../../Components/ClientForm/ClientDemandeForm';
import ClientFooter from '../../Components/Footer/ClientFooter';
import ClientNav from '../../Components/Navbar/ClientNav';
import '../../Assets/css/ClientForm.css'
// import { Container } from './styles';

function DemandForm() {
  return <div>
    <ClientNav/>
    <div className='cont'>
      <div className='hd'>
        <h3 className='txss'> Loan Application</h3>
        
      </div>
    <ClientDemandeForm></ClientDemandeForm>
    </div>
     
      <ClientFooter/>
  </div>;
}

export default DemandForm;