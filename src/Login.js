import React, { useState } from 'react';
import './index.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    navigate('/plans');
  };

  return (
    <React.Fragment>
      <div className="Create-account" id="register-login-block">
        <p className="head-text">Login to your account</p>
                
        <form>
          <label for="email" className="labels">Email</label>
          <input type="email" name="email" id="email"/> <br />
                    
          <label for="pwd" className="labels">Password</label>
          <input type="password" name="password" id="pwd"/> <br />
                   
          <label for="remember-me" className="labels" id="remem-me"><input type="checkbox" id="remember-me" name="remember-me" />Remember me</label> <br />
          <input type="submit" value="Login" id="login" className='submit' onClick={handleLogin}/>
                    
        </form>
                
        <p id="have-acc" className="footer-text">New to MyApp? <Link to="/" className="footer-link">Sign Up</Link></p>
      </div>
    </React.Fragment>
  );
}


export default Login;