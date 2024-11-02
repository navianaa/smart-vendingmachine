import React, { useState } from 'react';
import '../css/style.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
      // Fungsi Register
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src="/images/register.jpg" alt="register" />
            </div>
            <div className="form-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister} className="forms">
                    <label>Name:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <label>Email:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <label>Phone Number:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="register-button">Register</button>
                    <p className="signup-link">
                        Already havean account? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
