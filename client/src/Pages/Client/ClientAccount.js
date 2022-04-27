import { Container,Grid } from '@material-ui/core';
import React , {useState} from 'react';
import ClientUserForm from '../../Components/ClientForm/ClientUserForm';
import ClientFooter from '../../Components/Footer/ClientFooter';
import ClientNav from '../../Components/Navbar/ClientNav';
import '../../Assets/css/clientcard.css'
import avatar from '../../Assets/images/maleavatar.svg'
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

// import { Container } from './styles';

function ClientAccount() {
const [edit,setEdit]=useState(false)
const handleClick = (event) => {
  setEdit(!edit);
  console.log(edit)
};
  return <div>
      <ClientNav/>
    
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
          { edit ? <ClientUserForm/> :<>
            <Grid item xs={12}><h3> Account details</h3></Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h5>username </h5>  
              <h6>: johndoe </h6>
            </div>
            </Grid>
            <Grid  item xs={6}>
            <div className='itm'> 
              <h5>account number </h5>  
              <h6>: 266262626262 </h6>
            </div>
            </Grid>
            <Grid xs={12}><h3>Personal details</h3></Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>First Name </h5>  
              <h6>: John</h6>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>Last Name </h5>  
              <h6>: Doe</h6>
            </div>
            </Grid>
            <Grid xs={4}>
            <div className='itm'> 
              <h5>ID Number</h5>  
              <h6>: 65156165</h6>
            </div>
            </Grid>
            <Grid xs={4}>
            <div className='itm'> 
              <h5>Date of birth </h5>  
              <h6>: </h6>
            </div>
            </Grid>
            <Grid xs={4}>
            <div className='itm'> 
              <h5>Location </h5>  
              <h6>: </h6>
            </div>
            </Grid>
           
            <Grid xs={6}>
            <div className='itm'> 
              <h5>mobile </h5>  
              <h6>: </h6>
            </div>
            </Grid>
            <Grid xs={6}>
            <div className='itm'> 
              <h5>Adress</h5>  
              <h6>: </h6>
            </div>
            </Grid>
             <Grid xs={12}>
            <div className='itm'> 
              <h5>Email</h5>  
              <h6>: johndoe@emaasqs.csd</h6>
            </div>
            </Grid>
            </>      
            }      
          </Grid>
          
        </div>


        
        </Container>
    
      <ClientFooter/>
      </div>;
}

export default ClientAccount;