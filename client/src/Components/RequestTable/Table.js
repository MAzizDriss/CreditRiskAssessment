import React, { useState } from 'react'
import BankerUserForm from '../BankerFrom/BankerUserForm';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./UseTable";
import {  Search } from "@material-ui/icons";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Controls from '../Controls/Controls';
import Sidebar from '../Sidebar/Sidebar';
import {Container} from '@material-ui/core'
import {Link } from 'react-router-dom'
import '../../Assets/css/Table.css'



const rows = [
    { id: 1, clientId:"10",loansId:"1126",status:"In progress"  },
    {id: 1, clientId:"15",loansId:"1598",status:"Approved"  },
    {id: 1, clientId:"500",loansId:"1783",status:"Refused"  },
    {id: 1, clientId:"1700",loansId:"14523",status:"In progress"  },
    {id: 1, clientId:"710",loansId:"1265",status:"Refused"  },
]

const headCells = [
    { id: 'clientId', label: 'Client_ID' },
    { id: 'loansId', label: 'Loan_ID' },
    { id: 'status', label: 'Status ' },
    { id: 'form', label: 'Form', disableSorting: true },  
]

export default function RTable() {

    // const classes = useStyles();
    const [records, setRecords] = useState(rows)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    
    
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
    return (
        <div>
           
            <Container  className="pagecontainer">
                <Paper className="pageContent">
                    {/* <BankerUserForm/>  */}
                    {/* <RequestForm/>  */}
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
                                        <TableCell>{item.clientId}</TableCell>
                                        <TableCell>{item.loansId}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell>                                     
                                            <Link to ="/admin/clientform" element= {<BankerUserForm/>}> 
                                                <EditOutlinedIcon fontSize="small" />
                                            </Link>                                                                                         
                                        </TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </TblContainer>
                    <TblPagination />
                </Paper>
            </Container>
        </div>
    )

}