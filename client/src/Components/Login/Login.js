import  "../../Assets/css/Login.css";
import profile from "../../Assets/images/user1.png";
import email from "../../Assets/images/mail.png";
import pass from "../../Assets/images/mdp.png";
import {Link } from 'react-router-dom'


function Login() {
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

              <h4 className="h4">USER ID</h4>
              <div>
                <img src={email} alt="email" className="email"/>
                <input type="text"  className="name"/>
              </div>
              <h4 className="h4">PASSWORD</h4>
              <div className="second-input">
                  <img src={pass} alt="pass" className="email"/>
                  <input type="password"  className="name"/>
              </div>
              
              <div className="login-button">
              <Link to='/a/dash'>
                <button className="button">Login</button>
                </Link>
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