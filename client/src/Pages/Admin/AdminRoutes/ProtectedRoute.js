import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import axios from 'axios';
const ProtectedAdminRoute = () => {

    const [role, setrole] = React.useState("")
    const [isConnected, setisConnected] = React.useState(localStorage.getItem('connected'))

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/auth', {
            headers: {
                "token": localStorage.getItem('token')
            }
        }).then((result) => {

            setrole(result.data.role)
            console.log(result.data.role)
        })
            .catch((err) => {
                setrole(null)
                console.log(err)
            })
    }, [])

    React.useEffect(() =>
        setisConnected(localStorage.getItem("connected"))
        , [isConnected])
    if (role != '')
        return (
            role == 'admin' ? <Outlet /> : <Navigate to="/" />
        )
}

export default ProtectedAdminRoute;