// src/components/LandingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './subComponent/Header';

const Home = () => {

  return (
    <div>
      <Header />
      <section className='flex items-center justify-center h-screen text-white bg-center bg-cover' style={{ backgroundImage: "url('bg.jpeg')" }}>
        <div className="flex flex-col w-full max-w-6xl mx-auto lg:flex-row section-row">
          <div className="flex flex-col justify-center w-full lg:w-1/2 c-1">
            <p className='mb-4 text-4xl font-bold heading'>Property Management Hub</p>
            <p className='mb-6 para'>Simplify your operations, increase productivity, and unlock the full potential of your real estate investments with our powerful Property Management Hub.</p>
            <Link to='/login' className='px-4 py-2 rounded-full text-dark button-white'>Login</Link>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 c-2">
            <img src="bodyimg.png" alt="bodylogo" className='img1' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
