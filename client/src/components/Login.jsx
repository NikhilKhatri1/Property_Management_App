import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import Header from './subComponent/Header';

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
    <div>
      {/* ==== import Header ====== */}
      <Header />
      {/* ======= Login Component ======= */}
      <div className="flex justify-center w-full h-screen px-3 mt-4 px-lg-0">
        <div className=" flex items-center flex-column login-container px-1 px-lg-0 bg-white bg-opacity-90 h-[470px] w-[450px] rounded-3xl">
          <div><img src="brandLogo.svg" alt="brandlogo" className='w-[200px] mt-[40px]' /></div>
          <div class="mt-4 mb-3 text-xl">Welcome Back to Your Property App</div>
          {/* Display error message */}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit} className='flex justify-center flex-column'>
            <div className=' w-[360px] mb-3'>
              <div className="m-3">
                <label htmlFor="loginId" className="form-label">Email ID :</label>
                <input
                  type="email"
                  className="form-control w-100"
                  id="loginId"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="Enter login ID (Email)"
                  required
                />
              </div>
              <div className="m-3">
                <label htmlFor="password" className="me-3 form-label">Password :</label>
                <input
                  type="password"
                  className="form-control w-100"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Submit button */}
            <div className='flex justify-center'>
              <button type="submit" className="btn btn-warning w-50">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
