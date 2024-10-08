import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <header className='top-0 bg-light position-sticky'>
        <nav className='h-[85px] d-flex justify-content-between align-items-center px-14'>
          <div className='logo'>
            <span><a href="/"><img src="brandLogo.svg" alt="logo" className='w-[170px]' /></a></span>
          </div>
          <div className='user-login fs-5'>
            <span className='me-3 fw-semibold'><a>Home</a></span>
            <button className='px-4 py-2 mx-3 rounded-full bg-slate-200 button-slate'><a>Login</a></button>
            <button className='px-4 py-2 rounded-full bg-slate-200 button-slate'><a>Sign Up</a></button>
          </div>

        </nav>
      </header>
      <section className='h-[800px] main flex justify-center align-items-center text-white p-5'>
        <div className="row">
          <div className="col-6 c-1">
            <p className='heading'>Property Management Hub</p>
            <p className='para'>Simplify your operations, increase productivity, and unlock the full potential of your real estate investments with our powerful Property Management Hub</p>
            <button className='px-4 py-2 rounded-full text-dark button-white'><a>Login</a></button>
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