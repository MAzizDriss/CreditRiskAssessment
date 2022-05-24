import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../Assets/css/dmnditem.css'
import { ThemeConsumer } from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
function getcolor(stat){
    
}

export default function DemandItem(props) {
  const [color,setColor]=useState("")
  const getColor=(stat)=>{
    if (stat=='Approved'){
       setColor("#58f04a")
  }
  else{
    if(stat=='Refused'){
    setColor("red")
  }
      else{setColor("#ffeb36")}
  }
  }
useEffect(()=>{
  getColor(props.status)
},[]) 
console.log(color,props.status)

    
  return (
    <Card  sx={{ maxWidth: 300,backgroundColor:'var(--light-blue) ', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' ,borderRadius:'25px'}}>
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
            Loan amount: {props.date}
          </Typography>
          <div className='f'>
          <Typography  className='rh' gutterBottom variant="h7" component="div">
            Status :
          </Typography>
          <Typography style={{color:color}} className='rh' gutterBottom variant="h7" component="div">
           {props.status}
          </Typography>
          </div>
         
         
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}