// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate(); // Using useNavigate hook

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4080/api/users/login', formData); // Updated URL with port 4080
      console.log(res.data);
      const token = localStorage.getItem('jwtToken');
      console.log(token); // Check if the token is present in localStorage
      
      navigate('/image-upload');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="background">
    <div className="login-container">
      <div className="card">
        <h2>Login</h2>
        <form className="form-container" onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
