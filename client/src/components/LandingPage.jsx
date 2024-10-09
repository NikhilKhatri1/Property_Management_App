import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const ToggleMenu = () => {
    setMenuIcon((prev) => !prev);
  }

  return (
    <div>
      <header className='top-0 position-sticky'>
        <nav className='h-[85px] d-flex justify-content-between align-items-center'>
          <div className='brand-logo'>
            <a href="/"><img src="brandLogo.svg" alt="logo" className='logoimg' /></a>
          </div>
          <div className='menu-icon'>
            <button
              className={`btn fs-1 me-3 ${menuIcon ? 'rotate-icon' : ''}`}
              onClick={ToggleMenu}
              aria-label={menuIcon ? "Close Menu" : "Open Menu"}>
              <i className={menuIcon ? "bi bi-x-lg" : "bi bi-list"}></i>
            </button>
          </div>
          <div className={`user-login fs-5 transition-menu ${menuIcon ? 'display-block' : 'display-none'}`}>
            <span className='me-lg-5 mt-lg-2 fw-semibold home'><Link to='/'>Home</Link></span>
            <Link to='/login' className='px-4 py-2 mx-3 rounded-full bg-slate-200 button-slate'>Login</Link>
            <Link to='/signup' className='px-4 py-2 rounded-full bg-slate-200 button-slate'>Sign Up</Link>
          </div>
        </nav>
      </header>
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

export default LandingPage;
