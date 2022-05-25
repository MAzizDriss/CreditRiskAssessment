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
import ButtonTab from './ButtonTab'

const rows = [
    { id: 1, clientId:"10",loansId:"1111",status:"In progress"  },]

const headCells = [
    { id: 'rib', label: 'Account_Number' },
    { id: '_id', label: 'Loan_Id' },
    { id: 'loan_intent', label: 'Loan_Intent' },
    { id: 'mail_status', label: 'Mail_status' },
    { id: 'status', label: 'Status ' },
    { id: 'form', label: 'Form', disableSorting: true },  
]

export default function RTable() {
    const [records, setRecords] = useState(rows)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [edit,setEdit]= useState(false)
    const [OpenDialog, setOpenDialog] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [user,setUser]= useState(null)
    
    useEffect(() => {
        axios.get('http://localhost:5000/admin/loanapp/apps', {
            headers: {
                "auth-token": localStorage.getItem('token')}
            }).then(data => {console.log(data.data)
                setRecords(data.data)
                })
            .catch((err) => console.log(err))

    }, []);
   
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
                    return items.filter(x => x.rib.includes(target.value))
            }
        })
    }
    const fetch_client_data = async (id)=>{
        await axios.get(`http://localhost:5000/user/${id}`, {
            headers: {
              "token": localStorage.getItem('token')
            }
        }).then(
            (res)=> {
                setUser(res.data)
                if (user) console.log(user)}
        ).catch((err)=>console.log(err))
    }

    const openInDialog = item => {
        
        setRecordForEdit(item)
        setOpenDialog(true)
    }

    const get_color = (status)=>{
        if (status=='Approved') return 'green'
        if (status=='Refused') return 'red'
        else return '#E1AD01'
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
                                    (<TableRow key={item._id} >  
                                        <TableCell>{item.rib }</TableCell>
                                        <TableCell>{item._id ? (item._id.$oid).substr(19, 5):''}</TableCell>
                                        <TableCell>{item.loan_intent}</TableCell>
                                        <TableCell >{item.mail_status}</TableCell>
                                        <TableCell style={{color:get_color(item.status)}}>{item.status}</TableCell>
                                        <TableCell>                                     
                                            <ButtonTab Color='#0e4064' text="Open"  onClick={() =>{
                                                console.log(item)
                                                setEdit(true);
                                                openInDialog(item) }}
                                            >
                                            </ButtonTab>                                                                                 
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
                     setEdit ={setEdit}
               />
            </UseDialog>
            </Container>
        </div>
    )

}