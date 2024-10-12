// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported
import Login from './components/Login';
import Signup from './components/Signup';
import DashBoard from './components/DashBoard'
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;
