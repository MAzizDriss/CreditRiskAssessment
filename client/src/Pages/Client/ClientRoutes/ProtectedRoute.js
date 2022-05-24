import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import axios from 'axios';
const ProtectedClientRoute = () => {

    const [role, setrole] = React.useState("client")
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
                window.location.replace("http://localhost:3000/")
            })
    }, [])

    if (role != '')
        return (
            role == 'client' ? <Outlet /> : <h1>Access Denied</h1>
        )
    else return(
        <Navigate to='/'/>
    )
    
}

export default ProtectedClientRoute;