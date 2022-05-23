import Sidebar from '../../Components/Sidebar/Sidebar';
import '../../Assets/css/admin.css';
import { Container,Grid } from '@material-ui/core';
import React , {useState} from 'react';
import BankerAccountForm from '../../Components/BankerFrom/BankerAccountForm';
import '../../Assets/css/clientcard.css'
import avatar from '../../Assets/images/maleavatar.svg'
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect } from 'react';
import axios from 'axios'

// import { Container } from './styles';

function MyAccount() {
  const [edit,setEdit]= useState(false)
const [users,setUsers] = useState([])
const handleClick = (event) => {
  setEdit(!edit);
  console.log(edit)
};
useEffect(()=>{
  axios.get('http://localhost:5000/api/protected', {
      headers: {
        "token": localStorage.getItem('token')
      }
    }).then((result) => {
      const d=result.data
      result.data ? setUsers(result.data) :setUsers([])
      
      
    })
},[])
  return <div className='disp'>
 <Sidebar />
  <div className='admincontainer'>
  <Container maxWidth='false' className='card-container'>
        <div className='bluhd'>
          <h2 className='title'>My informations</h2>
          <Fab className='bttn' size="medium" color="false" onClick={handleClick} aria-label="add" >
             <EditIcon/></Fab>
        </div>
        <div className='info'>
          
          <div className='imgcnt'>
            <img className='sz'src={avatar}/>
          </div>
          
          <Grid container className='details'>
          { edit ? <BankerAccountForm handleClick={handleClick} /> :<>
            <Grid item xs={12}><h3> Account details</h3></Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h5>ID Number</h5>  
              <h6>: {users.cin}</h6>
            </div>
            </Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h5>account number </h5>  
              <h6>: {users.rib} </h6>
            </div>
            </Grid>
            <Grid xs={12}><h3>Personal details</h3></Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>First Name </h5>  
              <h6>: {users.firstname}</h6>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>Last Name </h5>  
              <h6>: {users.lastname}</h6>
            </div>
            </Grid>
            
            <Grid xs={4}>
            <div className='itm'> 
              <h5>Age</h5>  
              <h6>: {users.age}</h6>
            </div>
            </Grid>
           
            <Grid xs={6}>
            <div className='itm'> 
              <h5>mobile </h5>  
              <h6>: {users.phone}</h6>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>Adress</h5>  
              <h6>:{users.adress}</h6>
            </div>
            </Grid>
             <Grid xs={12}>
            <div className='itm'> 
              <h5>Email</h5>  
              <h6>: {users.email}</h6>
            </div>
            </Grid>
            </>      
            }      
          </Grid>
          
        </div>


        
        </Container>
  </div>
  </div>;
}

export default MyAccount;