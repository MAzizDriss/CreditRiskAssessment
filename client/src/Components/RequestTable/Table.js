import React, { useEffect,useState } from 'react'
import BankerUserForm from '../BankerFrom/BankerUserForm';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./UseTable";
import {  LiveTv, Search } from "@material-ui/icons";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Controls from '../Controls/Controls';
import {Container} from '@material-ui/core'
import {Link } from 'react-router-dom'
import '../../Assets/css/Table.css'
import axios from 'axios'
import Button from '../Controls/Button';
import  UseDialog from "./UseDialog";

const rows = [
    { id: 1, clientId:"10",loansId:"1111",status:"In progress"  },]

const headCells = [
    { id: 'rib', label: 'Account_Number' },
    { id: '_id', label: 'Loan_Id' },
    { id: 'loan_amnt', label: 'Loan_Amount' },
    { id: 'loan_intent', label: 'Loan_Intent' },
    { id: 'status', label: 'Status ' },
    { id: 'form', label: 'Form', disableSorting: true },  
]

export default function RTable() {

    // const classes = useStyles();
    const [records, setRecords] = useState(rows)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [edit,setEdit]= useState(false)
    const [OpenDialog, setOpenDialog] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
   
    
    useEffect(() => {
        axios.get('http://localhost:5000/admin/loanapp/apps', {
            headers: {
                "auth-token": localStorage.getItem('token')}
            }).then(data => {console.log(data.data)
                setRecords(data.data)
                })
            .catch((err) => console.log(err))
    }, []);
    const handleEditButton =()=> {
        setEdit(!edit)
    }
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
    const addOrEdit = (resetForm) => {
      
        resetForm()
        setRecordForEdit(null)
        setOpenDialog(false)
        axios.get('http://localhost:5000/employee')
            .then(data => {console.log(data.data)
                setRecords(data.data)
                window.location.reload()})
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInDialog = item => {
        
        setRecordForEdit(item)
        setOpenDialog(true)
    }
    
    return (
        <div>
            
            <Container  className="pagecontainer">
                <Paper className="pageContent">
                   
                    <Toolbar>
                        <Controls.Input
                            color='primary'
                            label="Search Clients"
                            className="searchInput"
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                            }}
                            onChange={handleSearch}
                        />                   
                    </Toolbar>
                    <TblContainer>
                        <TblHead/>
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map(item =>
                                    (<TableRow key={item._id}>
                                        
                                        <TableCell>{item.rib }</TableCell>
                                        <TableCell>{item._id ? (item._id.$oid).substr(19, 5):''}</TableCell>
                                        <TableCell>{item.loan_amnt}</TableCell>
                                        <TableCell>{item.loan_intent}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell>                                     
                                            <Button color="#0e4064" value="Open" onClick={() =>{
                                                console.log(item)
                                                setEdit(true);
                                            openInDialog(item) }}
                                            >
                
                                            </Button>
                                               
                                                                                                                             
                                        </TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                </Paper>
                <UseDialog
                title="Banker Form"
                OpenDialog={OpenDialog}
                setOpenDialog={setOpenDialog}
            >
                <BankerUserForm
                     recordForEdit={recordForEdit}
                     edit={edit}
               />
            </UseDialog>
            </Container>
        </div>
    )

}