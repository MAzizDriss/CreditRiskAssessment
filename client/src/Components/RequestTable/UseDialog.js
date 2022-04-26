import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "../Controls/Controls";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(1),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px',
        backgroundColor:'#05092e',
        color:'white'
        },
    closebtn:{
        marginRight:'150px'
    }
}))

function UseDialog(props) {

    const { title, children, OpenDialog, setOpenDialog } = props;
    const classes = useStyles();

    return (
        <Dialog open={OpenDialog} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton style={{marginRight:40}}
                        color="secondary"
                        onClick={()=>{setOpenDialog(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default UseDialog
