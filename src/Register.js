import React , { useState }from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './index.css';

    
export default function Register() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Extract form data
        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        };
    
        try {
          const response = await axios.post('http://localhost:5000/api/register', formData); 
    
          if (response.data) {
            console.log('Registration successful:', response.data);
          } else {
            console.error('Registration failed: No response data');
          }
        } catch (error) {
          console.error('Registration failed:', error.response ? error.response.data : error.message);
        }
    };
    



    return (
            <div className="Create-account" id="register-login-block">
                <p className="head-text">Create Account</p>
                
                <form onSubmit={handleSubmit}>
                    <label for="name" className="labels">Name</label>
                    <input type="text" name="name" id="name"/> <br />
                    
                    <label for="email" className="labels">Email</label>
                    <input type="email" name="email" id="email"/> <br />
                    
                    <label for="pwd" className="labels">Password</label>
                    <input type="password" name="password" id="pwd"/> <br />
                    
                    <label for="remember-me" className="labels" id="remem-me"><input type="checkbox" id="remember-me" name="remember-me" />     Remember me</label> <br />
                    
                    <input type="submit" value="Sign Up" id="signup" className='submit'/>
                </form>
                
                <p id="have-acc" className="footer-text">Already have an account? {!isLoggedIn && <Link to="/Login" className="footer-link" >Login</Link>}
                {isLoggedIn && <p>You are logged in</p>}</p>
                
            </div>
    );
}