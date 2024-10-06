import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashBoard from './DashBoard';
const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:5000/login', { loginId, password });
      console.log(response.data.message);
      // Redirect to welcome page on successful login
      navigate('/DashBoard'); // Use navigate to redirect
    } catch (err) {
      if (err.response) {
        // Handle known error responses from server
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center fs-2 fw-bold">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
