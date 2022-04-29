import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'


const VisitorRouter = () => {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<WelcomePage />}></Route>
                </Routes>
            </Fragment>
        </Router>
    )
}
export default VisitorRouter