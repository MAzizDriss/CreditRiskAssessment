import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../Assets/css/dmnditem.css'
import { ThemeConsumer } from 'styled-components';
function getstat(stat){
    if (stat=='Approved'){
        return 1
    }
    else {
        return 0
    }
}

export default function DemandItem(props) {
   
    console.log(getstat(props.status))
  return (
    <Card  sx={{ maxWidth: 350,backgroundColor:'var(--light-blue) ', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' ,borderRadius:'25px'}}>
      <CardActionArea>
        
        <CardContent>
           <div className='f'>
          <Typography className='t' gutterBottom variant="h5" component="div">
            Loan Application:
          </Typography>
          <Typography className='t2' gutterBottom variant="h5" component="div">
            {props.loanid}
          </Typography>
          </div>
        <hr style={{backgroundColor:'White'}} />
          
          <div className='fl'>
          <Typography className='t1' gutterBottom variant="h7" component="div">
            Date: {props.date}
          </Typography>
          <div className='f'>
          <Typography  className='rh' gutterBottom variant="h7" component="div">
            Status :
          </Typography>
          <Typography style={getstat(props.status) ? {color:'#65fa43'}: {color:'red'}} className='rh' gutterBottom variant="h7" component="div">
           {props.status}
          </Typography>
          </div>
         
         
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}