import  "../../Assets/css/Login.css";
import React from "react";
import axios from "axios";
import profile from "../../Assets/images/user1.png";
import email from "../../Assets/images/mail.png";
import pass from "../../Assets/images/mdp.png";
import {Link } from 'react-router-dom'


function Login() {


  const [e_mail, setemail] = React.useState('')
  const handleEmailChange = (event) => {
      setemail(event.target.value)
  }
  const [password, setpassword] = React.useState('')
  const handlePasswordChange = (event) => {
      setpassword(event.target.value)
  }



  const handleSubmit = (event) => {
    event.preventDefault()
    //verification client side

    const user = {
        email: e_mail,
        password: password
    }
    axios.post('http://localhost:5000/api/login', user).then(
        (result) => {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('connected', true);
            // window.alert("welcome Ye lrojla")
            document.location.reload(true)
        })
        .catch((err) => {
            console.log(err.response.data)
            localStorage.setItem('connected', false)
            window.alert(err.response.data.error)
        })
}




  return (
    <div className="main">
      <div className="sub-main">
          <div>
          <div className="imgs">
            <div className="container-image">
                <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>

          <div className="text">
            <h2 className="h2">Login Page</h2>

              <h4 className="h4">E_MAIL</h4>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text"  className="name"  onChange={handleEmailChange}/>
              </div>
              <h4 className="h4">PASSWORD</h4>
              <div className="second-input">
                  <img src={pass} alt="pass" className="email"/>
                  <input type="password"  className="name" onChange={handlePasswordChange}/>
              </div>
              
              <div className="login-button">
              {/* <Link to='/a/dash'> */}
                <button className="button" onClick={handleSubmit}>Login</button>
                {/* </Link> */}
              </div>
              
            
              <p className="link">
                <a href="#" >Forgot password ?</a> 
              </p>
            
  
          </div>
        </div>
        

      </div>
      
    </div>
   
  );
}

export default Login;