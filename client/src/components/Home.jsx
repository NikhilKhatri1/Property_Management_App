import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './subComponent/Header';

const Home = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const ToggleMenu = () => {
    setMenuIcon((prev) => !prev);
  }
  return (
    <div>
      <Header />
      <section className='h-[800px] main flex justify-center align-items-center text-white p-5'>
        <div className="row">
          <div className="col-lg-6 col-12 c-1">
            <p className='heading'>Property Management Hub</p>
            <p className='para'>Simplify your operations, increase productivity, and unlock the full potential of your real estate investments with our powerful Property Management Hub</p>
            <Link to='/login' className='px-4 py-2 rounded-full text-dark button-white'>Login</Link>
          </div>
          <div className="col-lg-6 col-12 c-2">
            <img src="bodyimg.png" alt="bodylogo" className='img1' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
