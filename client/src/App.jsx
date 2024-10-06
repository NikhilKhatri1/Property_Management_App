// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported
import Login from './components/Login';
import Signup from './components/Signup';

import DashBoard from './components/DashBoard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
      </Routes>
    </Router>
  );
};

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h2 className="mb-4 text-2xl text-center">Property Management App</h2>
    <div className="p-6 bg-white rounded shadow-md w-80">
      <h3 className="mb-2 text-lg">Welcome! Please choose an option:</h3>
      <div className="flex justify-between mt-4">
        <Link to="/login" className="btn btn-warning">Login</Link>
        <Link to="/signup" className='btn btn-success'>Signup</Link>
      </div>
    </div>
  </div>
);

const AuthPage = ({ isLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-80">
        {isLogin ? <Login /> : <Signup />}
        <div className="flex justify-between mt-4">
          <Link to={isLogin ? "/signup" : "/login"} className="btn btn-link">
            {isLogin ? 'Don\'t have an account? Signup' : 'Already have an account? Login'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
