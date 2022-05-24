
import { Container,Grid } from '@material-ui/core';
import React , {useState} from 'react';
import ClientUserForm from '../../Components/ClientForm/ClientUserForm';
import '../../Assets/css/clientcard.css'
import avatar from '../../Assets/images/maleavatar.svg'
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect } from 'react';
import axios from 'axios'
import ClientNav from '../../Components/Navbar/ClientNav';

// import { Container } from './styles';

function ClientAccount() {
const [edit,setEdit]= useState(false)
const [users,setUsers] = useState([])
const handleClick = (event) => {
  setEdit(!edit);
  
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
  return <div >
   <ClientNav/>
  {/* <div className='admincontainer'> */}
  <Container maxWidth='false' className='card-container'>
        <div className='bluhd'>
          <h2 className='title'>My informations</h2>
          {!edit?<Fab className='bttn' size="medium" color="false" onClick={handleClick} aria-label="add" >
             <EditIcon/></Fab>:<></>}
        </div>
        <div className='info'>
          
          <div className='imgcnt'>
            <img className='sz'src={avatar}/>
          </div>
          
          <Grid container className='details'>
          { edit ? <ClientUserForm setedit={setEdit} data={users} /> :<>
            <Grid item xs={12}><h3 className='card-header'> Account details</h3></Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>ID Number</h4>  
              <h4>{users.cin}</h4>
            </div>
            </Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>Account Number </h4>  
              <h4 >{users.rib} </h4>
            </div>
            </Grid>
            <Grid xs={12}><h3 className='card-header'>Personal details</h3></Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>First Name </h4>  
              <h4> {users.firstname}</h4>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>Last Name </h4>  
              <h4> {users.lastname}</h4>
            </div>
            </Grid>
            
            <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>Age</h4>  
              <h4> {users.age}</h4>
            </div>
            </Grid>
           
            <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>mobile </h4>  
              <h4 > {users.phone}</h4>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>Adress</h4>  
              <h4>{users.adress}</h4>
            </div>
            </Grid>
             <Grid xs={6}>
            <div className='itm'> 
              <h4 className='card-subheader'>Email</h4>  
              <h4>{users.email}</h4>
            </div>
            </Grid>
            </>      
            }      
          </Grid>
          
        </div>


        
        </Container>
  </div>
  // </div>;
}

export default ClientAccount;