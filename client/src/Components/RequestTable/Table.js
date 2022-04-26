import React, { useState ,useEffect} from 'react'
import BankerUserForm from '../BankerFrom/BankerUserForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./UseTable";
import {  Search } from "@material-ui/icons";
import PageHeader from "./PageHeader";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import  UseDialog from "./UseDialog";
import Notification from './Notification';
import ConfirmDialog from './ConfirmDialog';
import Controls from '../Controls/Controls';
import Sidebar from '../Sidebar/Sidebar';
import RequestForm from './RequestForm';
import Popup from './Popup';
import * as clientService from '../Services/ClientServices';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(15),
        padding: theme.spacing(5),
        boxShadow: '0 8px 16px 0 #7a7a7a',
        borderRadius:10,
        // backgroundColor: '#c9c9c9'
    },
    searchInput: {
        width: '45%'
    },
    
    
    
}))
const rows = [
    { id: 1, firstName: 'Jon',lastName: 'Snow',email:"hhhhhhhh" ,phone :'2222222' },]

const headCells = [
    { id: 'firstName', label: 'FirstName' },
    { id: 'lastName', label: 'LastName' },
    { id: 'email', label: 'Email Address ' },
    { id: 'phone', label: 'Phone Number' },
    { id: 'loan_amnt', label: 'Loan Amont'  },
    {id :'status',label:'Status'},
    { id: 'actions', label: 'Actions', disableSorting: true },
    
]

export default function RTable() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [add,setAdd]=useState(false)
    const [edit,setEdit]=useState(false)
    const [records, setRecords] = useState(rows)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [OpenDialog, setOpenDialog] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [openPopup, setOpenPopup] = useState(false)

    
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
    

    const openInDialog = item => {
        
        setRecordForEdit(item)
        setOpenDialog(true)
    }
    
    const addOrEdit = (client, resetForm) => {
        if (client.id == 0)
            clientService.insertClient(client)
        else
            clientService.updateClient(client)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(clientService.getAllClients())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
   
        
    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        clientService.deleteClient(id);
        setRecords(clientService.getAllClients())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }
    return (
        <div>
            {/* <Sidebar/> */}
            <PageHeader
                title="REQUEST TABLE"
                subTitle="CLIENTS"
                className={classes.PageHeader}
                icon={<PeopleOutlineTwoToneIcon color ="primary" fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                 {/* <BankerUserForm/>  */}
                 {/* <RequestForm/>  */}
                <Toolbar>
                    <Controls.Input
                        color='primary'
                        label="Search Clients"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    {/* <Controls.Button
                    color="secondary"
                        text="Add New"
                        variant="contained"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setAdd(true);setEdit(false);setOpenDialog(true); setRecordForEdit(null);}}
                    />   */}
                </Toolbar>
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item._id}>
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.loan_amnt}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() =>{ setAdd(false);setEdit(true);openInDialog(item) }}>
                                        
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <RequestForm
                     recordForEdit={recordForEdit}
                     addOrEdit={addOrEdit} 
                     add={add}
                     edit={edit}/>
            </Popup>
            <Notification
                
                notify={notify}
                setNotify={setNotify}
            />
             <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
           
    
        </div>
    )

}