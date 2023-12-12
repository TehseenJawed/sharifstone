import React, {useState} from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    const loginForm = () => {
        if(formData.email === 'admin9871@sharifstore.com' && formData.password === 'sharif-admin0873565') {
            alert('You are loggedin')
            navigate('/admin-dashboard', { replace: true });
            console.log('doing good job.');
        } else {
            alert('Your email or password does not match. please try again.')
        }
    }

  return (
    <div className="login-container">
      <div className="login-innercontainer">
        <div className="login-header">Login</div>
        <input
          className="login-input"
          type="text"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          value={formData.email}
          placeholder="Email"
        />
        <input
          className="login-input"
          type="password"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          value={formData.password}
          placeholder="Password"
        />
        <button onClick={loginForm} className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
