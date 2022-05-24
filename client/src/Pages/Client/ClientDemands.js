import { Container, Grid } from '@mui/material';
import React ,{useState,useEffect} from 'react';
import DemandItem from '../../Components/DemandItem/DemandItem';

import ClientFooter from '../../Components/Footer/ClientFooter';
import ClientNav from '../../Components/Navbar/ClientNav';
import '../../Assets/css/dmnditem.css'
import axios from 'axios'
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
  
  const [loandata,setLoandata]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/protected', {
      headers: {
        "token": localStorage.getItem('token')
      }
    }).then((result) => {
      const d=result.data
      result.data ? 
      axios.get(`http://localhost:5000/loanapp/apps/${result.data._id.$oid}`).then(loans=>{
        loans.data?setLoandata(loans.data):setLoandata([])
      }

      ):console.log('data not loaded')
    })
      
      
    
    
  },[])
  console.log(loandata)
  return <div>
    <ClientNav/>
    <div className='c1'>
    <h1 className='t3'>Loan Applications List</h1>
    <hr className='rw' />
    </div>
    
    <div className='conta'>
    <Grid  container spacing={2}>

    
      {loandata.map((item)=>{
        return <Grid item xs={4} ><DemandItem loanid={item._id.$oid.substr(19,5)} status={item.status} date={item.loan_amnt}/></Grid>
      })}
     </Grid>
     </div>
   
      <ClientFooter/>
  </div>;
}

export default ClientDemands;