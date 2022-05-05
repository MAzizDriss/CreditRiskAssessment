import { Container, Grid } from '@mui/material';
import React from 'react';
import DemandItem from '../../Components/DemandItem/DemandItem';

import ClientFooter from '../../Components/Footer/ClientFooter';
import ClientNav from '../../Components/Navbar/ClientNav';
import '../../Assets/css/dmnditem.css'
// import { Container } from './styles';
const data=[{
  loanid:'151313',
  date:'05 aug 2020',
  status:'Approved'
},
{loanid:'151323',
  date:'05 aug 2021',
  status:'Refused'
},
{loanid:'151323',
  date:'05 aug 2021',
  status:'Refused'
},
{loanid:'151323',
  date:'05 aug 2021',
  status:'Refused'
},
]

function ClientDemands() {
  return <div>
    <ClientNav/>
    <div className='c1'>
    <h1 className='t3'>Loan Applications List</h1>
    <hr className='rw' />
    </div>
    
    <div className='conta'>
    <Grid  container spacing={2}>

    
      {data.map((item)=>{
        return <Grid item xs={3} ><DemandItem loanid={item.loanid} status={item.status} date={item.date}/></Grid>
      })}
     </Grid>
     </div>
   
      <ClientFooter/>
  </div>;
}

export default ClientDemands;