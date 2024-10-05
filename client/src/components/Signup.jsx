import React from 'react';

const Signup = () => {
    return (
        <div className="container">
            <h2 className="text-center">Signup</h2>
            <form>
                <div className="mb-1">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                </div>
                <div className="mb-1">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
                </div>
                <div className="mb-1">
                    <label htmlFor="userName" className="form-label">User name</label>
                    <input type="text" className="form-control" id="UserName" placeholder="Enter User name" />
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
