import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission
    setError('');  // Clear previous errors

    try {
      // Make POST request to the login endpoint
      const response = await axios.post('http://localhost:5000/login', { loginId, password });

      // Check for success response and redirect to DashBoard
      if (response.status === 200) {
        console.log(response.data.message);
        navigate('/DashBoard');  // Redirect to DashBoard on successful login
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.status === 401) {
        // Display error message from server (e.g., wrong password or loginId)
        setError(err.response.data.message);
      } else {
        // Display generic error message for unexpected issues
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center fs-2 fw-bold">Login</h2>

      {/* Display error message */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="loginId" className="form-label">Login ID (Email)</label>
          <input
            type="email"
            className="form-control"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="Enter login ID (Email)"
            required
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
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
