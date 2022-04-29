import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClientAccount from '../ClientAccount'
import ClientBalance from '../ClientBalance'
import ClientDemands from '../ClientDemands'
import DemandForm from '../DemandForm'
import HomeClient from '../HomeClient'
import ProtectedClientRoute from './ProtectedRoute'

const ClientRouter = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<ProtectedClientRoute />}>
                        <Route exact path='/' element={<HomeClient/>}></Route>
                    </Route>
                    <Route exact path='/client' element={<ProtectedClientRoute />}>
                        <Route exact path="/client/account" element={<ClientAccount />}> </Route>
                        <Route exact path="/client/balance" element={<ClientBalance />}> </Route>
                        <Route exact path="/client/demands" element={<ClientDemands />}> </Route>
                        <Route exact path="/client/form" element={<DemandForm />}></Route>
                        <Route exact path="/client/home" element={<HomeClient />}></Route>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default ClientRouter