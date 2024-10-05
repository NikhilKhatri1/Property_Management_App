// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported
import Login from './components/Login';
import Signup from './components/Signup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <h2 className="text-center text-2xl mb-4">Property Management App</h2>
              <div className="bg-white p-6 rounded shadow-md w-80">
                <h3 className="text-lg mb-2">Welcome! Please choose an option:</h3>
                <div className="flex justify-between mt-4">
                  <NavButton to="/login">Login</NavButton>
                  <NavButton to="/signup">Signup</NavButton>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

const NavButton = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
};

const AuthPage = ({ isLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        {isLogin ? <Login /> : <Signup />}
        <div className="flex justify-between mt-4">
          <NavButton to="/login">Login</NavButton>
          <NavButton to="/signup">Signup</NavButton>
        </div>
      </div>
    </div>
  );
};


export default App;
