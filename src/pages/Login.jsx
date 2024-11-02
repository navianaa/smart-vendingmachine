import React, { useState } from 'react';
import '../css/style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      // Fungsi login
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Welcome Back</h2>
                <p>Please fill your data</p>
                <form onSubmit={handleLogin} className="forms">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember" className='custom-checkbox'/>
                        <label htmlFor="remember">Remember for 30 days</label>
                        <a href="#forgot-password" >Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button">Log In</button>
                </form>
                    <button className="google-login">Log In with Google</button>
                    <p className="signup-link">
                        Don’t have an account? <a href="/register">Sign Up</a>
                    </p>
            </div>
            <div className="image-container">
                <img src="/images/login-image.jpg" alt="Login" />
            </div>
        </div>
    );
}

export default Login;
