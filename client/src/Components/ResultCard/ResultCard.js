import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



export default function ResultCard({ user, loan_data }) {
    return (
        <Box sx={{ minWidth: 800, marginRight: '50px' }}>
            <Card variant="outlined">
                <React.Fragment >
                    <CardContent>
                        <Grid container spacing={0}>
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
                            <Grid item xs={2}>
                                <Typography variant="h6">
                                    id:
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>

                            </Grid>

                            <Grid item xs={2}>
                            <Typography variant="h6">
                                email:
                            </Typography>
                            </Grid>
                            <Grid item xs={10}>
                            <Typography variant="body1">{user.email}</Typography>
                            </Grid>
    
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </React.Fragment></Card>
        </Box>
    );
}