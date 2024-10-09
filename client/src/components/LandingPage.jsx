import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <header className='top-0 position-sticky'>
        <nav className='h-[85px] d-flex justify-content-between align-items-center px-14'>
          <div className='logo'>
            <span><a href="/"><img src="brandLogo.svg" alt="logo" className='w-[170px]' /></a></span>
          </div>
          <div className='user-login fs-5'>
            <span className='me-5 fw-semibold home'><Link to='/'>Home</Link></span>
            <Link to='/login' className='px-4 py-2 mx-3 rounded-full bg-slate-200 button-slate'>Login</Link>
            <Link to='/signup' className='px-4 py-2 rounded-full bg-slate-200 button-slate'>Sign Up</Link>
          </div>

        </nav>
      </header>
      <section className='h-[800px] main flex justify-center align-items-center text-white p-5'>
        <div className="row">
          <div className="col-6 c-1">
            <p className='heading'>Property Management Hub</p>
            <p className='para'>Simplify your operations, increase productivity, and unlock the full potential of your real estate investments with our powerful Property Management Hub</p>
            <Link to='/login' className='px-4 py-2 rounded-full text-dark button-white'>Login</Link>
          </div>
          <div className=" col-6">
            <img src="bodyimg.png" alt="bodylogo" className='img1' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage