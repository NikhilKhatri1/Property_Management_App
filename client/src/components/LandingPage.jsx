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
            <span className='px-4 py-2 mx-3 rounded-full bg-slate-200 button-slate'><a>Login</a></span>
            <span className='px-4 py-2 rounded-full bg-slate-200 button-slate'><a>Sign Up</a></span>
          </div>

        </nav>
      </header>
      <section className='h-[800px] main flex justify-center align-items-center text-white p-5'>
        <div className="border-1 row">
          <div className="col-6 border-1">
            <h1 className='fs-1 fw-semibold'>Property Management Hub</h1>
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