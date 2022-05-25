import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Reload from '../ReloadComponent/Reload';
import axios from 'axios';


export default function ResultCard({ putdata,setShowResults ,modelres,user, loan_data }) {
    const proba = ()=>{
        let prob= modelres.proba*50/0.15
        if (prob>30) return 99.99
        else return prob
    }
    const res_col =()=>{
        if (proba()<40) return 'green'
        if ( proba()<60) return 'yellow'
        else return 'red'   
    }
    const handleRefuse = async()=>{
        putdata.status='Refused'
        console.log(putdata)
        await axios.put(`http://localhost:5000/admin/loanapp/update/${loan_data._id.$oid}`,putdata)
        .then(response => {
            window.location.reload();
      console.log("element modifier et  enregistées dans la base de données ")
  }).catch(error => {})
    }
    const handleAccept = async()=>{
        putdata.status='Approved'
        console.log(loan_data)
        await axios.put(`http://localhost:5000/admin/loanapp/update/${loan_data._id.$oid}`,putdata)
        .then(response => {
            window.location.reload();
      console.log("element modifier et  enregistées dans la base de données ")
  }).catch(error => {})
    }
    return (
        <>
    {  (loan_data && modelres)?  <Box sx={{ minWidth: 800, marginRight: '50%' }}>
            {console.log(loan_data)}
            <Card variant="outlined">
                <React.Fragment >
                    <CardContent style={{padding:'5%'}}>
                        <Grid container spacing={1}>
                            <Grid  item xs={12}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {new Date().toString().substring(0, 16)}
                            </Typography>
                            </Grid>
                            <Grid  item xs={12}>
                            <Typography variant="h4" component="div">
                                {user.firstname + ' ' + user.lastname}
                            </Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                loan application id: {loan_data._id.$oid.substr(19, 5)}
                            </Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <Typography variant="h5" component="div" style={{marginBottom:'5px',color:'var(--light-blue)'}}>
                                    Client Information
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6">
                                    cin:
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {user.cin}</Typography>
                            </Grid>

                            <Grid item xs={3}>
                            <Typography variant="h6">
                                email:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}>{user.email}</Typography>
                            </Grid>

                            <Grid item xs={3}>
                            <Typography variant="h6">
                                phone:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}>{user.phone}</Typography>
                            </Grid>

                            <Grid item xs={3}>
                            <Typography variant="h6">
                                age:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}>{user.age}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                annual income:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.annual_income}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                Emplyment length:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.person_emp_length}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <Typography variant="h5" component="div" style={{marginTop:'40px',marginBottom:'5px',color:'var(--light-blue)'}}>
                                    Loan Information
                            </Typography>
                            </Grid>

                            <Grid item xs={3}>
                            <Typography variant="h6">
                                loan amount:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.loan_amnt}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                loan interest rate:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.loan_interest_rate}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                Loan term:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.loan_term}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                Loan Grade:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.grade}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                loan intent:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.loan_intent}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                Home Ownership:
                            </Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.home_ownership}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                            <Typography variant="h6">
                                Defaulted before:
                            </Typography>
                            </Grid>
                            <Grid item xs={9}>
                            <Typography variant="body1" style={{marginTop:'6px'}}> {loan_data.dof}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{marginTop:'30px'}}>
                            <Typography variant="h6" style={{color:'var(--light-blue)',marginLeft:'63%'}}>
                                Default probability:
                            </Typography>
                            </Grid>
                        <Grid item xs={6} style={{marginLeft:'63%',fontSize:'64px', color:res_col()}}>{(proba()).toString().substring(0,5)}%</Grid>
                    </CardContent>
                    <CardActions style={{marginLeft:'70%'}}>
                        <Button onClick={()=>{handleRefuse()}}>REFUSE</Button>
                        <Button onClick={()=>{handleAccept()}}> APPROVE</Button>
                    </CardActions>

                </React.Fragment></Card>
        </Box>:<div style={{marginLeft:'40%',marginTop:'20%',width:'100%'}}><Reload /></div>}
        </>
    );
}