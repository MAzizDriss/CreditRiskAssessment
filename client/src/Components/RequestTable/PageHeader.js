import React from 'react'
import { Paper, Card, Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root: {
       marginLeft:200,
       marginBottom:100,
       width:400,
       boxShadow: '0 8px 16px 0 #7a7a7a',     
       border:'borderBottom',
       borderRadius:45,
       background:'#0e4064'
    },
    pageHeader:{
       
        paddingLeft:50,
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        marginLeft:10,
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        color:'white',
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper borderBottom={5} elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}