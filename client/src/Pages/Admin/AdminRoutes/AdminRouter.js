import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BankerUserForm from '../../../Components/BankerFrom/BankerUserForm'
import Dashboard from '../Dashboard'
import DemandsList from '../DemandsList'
import Inbox from '../Inbox'
import MyAccount from '../MyAccount'
import ProtectedAdminRoute from './ProtectedRoute'

const AdminRouter = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<ProtectedAdminRoute />}>
                        <Route exact path='/' element={<Dashboard />}>
                        </Route>
                    </Route>
                        <Route exact path='/admin' element={<ProtectedAdminRoute />}>
                            <Route exact path='/admin/dashboard' element={<Dashboard />}></Route>
                            <Route exact path='/admin/dlist' element={<DemandsList />}></Route>
                            <Route exact path='/admin/inbox' element={<Inbox />}></Route>
                            <Route exact path='/admin/account' element={<MyAccount />}></Route>
                            <Route exact path='/admin/clientform' element={<BankerUserForm />} />
                        </Route>
                </Routes>
            </Fragment>
        </Router>
    )
}
export default AdminRouter