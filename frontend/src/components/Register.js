// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;
  const navigate = useNavigate(); // Using useNavigate hook

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4080/api/users/register', formData); // Updated URL with port 4080
      console.log(res.data);
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="background">
    <div className="register-container">
      <div className="card">
        <h2 className="heading">Create an Account</h2>
        <form className="form-container" onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Your Name'
            name='name'
            value={name}
            onChange={onChange}
            className="input-field"
          />
          <input
            type='email'
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={onChange}
            className="input-field"
          />
          <input
            type='password'
            placeholder='Your Password'
            name='password'
            value={password}
            onChange={onChange}
            className="input-field"
          />
          <button type='submit' className="submit-btn">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
