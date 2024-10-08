import React, { useState } from 'react';

const Signup = () => {
    // Manage form state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        const signupData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            loginId: email,  // Using email as loginId
            password: password
        };

        try {
            // Sending signup data to backend
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupData)
            });

            const result = await response.json();

            if (response.status === 200) {
                setMessage('Signup successful!');
                // Clear form fields
                setFirstName('');
                setLastName('');
                setUserName('');
                setEmail('');
                setPassword('');
            } else {
                setMessage(result.error || 'Signup failed');
            }
        } catch (err) {
            setMessage('Error occurred during signup');
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        placeholder="Enter User name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Signup</button>
            </form>
            {message && <p className="mt-2 text-center">{message}</p>}
        </div>
    );
};

export default Signup;
