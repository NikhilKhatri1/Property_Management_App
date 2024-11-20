// src/components/DashBoard.jsx
import React, { useState } from 'react';
import './Dashboard.css'; // Include the CSS for dashboard styles

const DashBoard = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isNavActive, setIsNavActive] = useState(false);

    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };

    const handleMouseOut = () => {
        setActiveIndex(null);
    };

    const toggleMenu = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <div className={`container ${isNavActive ? 'active' : ''}`}>
            <div className={`navigation ${isNavActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <span className="title">Brand Name</span>
                        </a>
                    </li>
                    {['Dashboard', 'Add Property', 'Property Detail', 'Settings', 'Sign Out'].map((title, index) => (
                        <li
                            key={title}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                            className={activeIndex === index ? 'hovered' : ''}
                        >
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name={`${title.toLowerCase().replace(' ', '-')}-outline`}></ion-icon>
                                </span>
                                <span className="title">{title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`main ${isNavActive ? 'active' : ''}`}>
                <div className="topbar">
                    <div className="toggle" onClick={toggleMenu}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    <div className="user">
                        <img src="assets/imgs/customer01.jpg" alt="User" />
                    </div>
                </div>

                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Property Details</h2>
                            <a href="#" className="btn">View All</a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Property Name</td>
                                    <td>Address</td>
                                    <td>Start Date</td>
                                    <td>End Date</td>
                                    <td>Payment Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Amar Hotel</td>
                                    <td>XYZ</td>
                                    <td>20/5/2024</td>
                                    <td>20/6/2024</td>
                                    <td><span className="status paid">Paid</span></td>
                                </tr>
                                <tr>
                                    <td>Amar Hotel</td>
                                    <td>XYZ</td>
                                    <td>20/5/2024</td>
                                    <td>20/6/2024</td>
                                    <td><span className="status declined">Not Paid</span></td>
                                </tr>
                                <tr>
                                    <td>Amar Hotel</td>
                                    <td>XYZ</td>
                                    <td>20/5/2024</td>
                                    <td>20/6/2024</td>
                                    <td><span className="status inProgress">In Progress</span></td>
                                </tr>
                                <tr>
                                    <td>Amar Hotel</td>
                                    <td>XYZ</td>
                                    <td>20/5/2024</td>
                                    <td>20/6/2024</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
