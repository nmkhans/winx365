import React from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("admin"));

    const handleLogout = () => {
        localStorage.removeItem("admin")
        window.location.reload()
    }

    return (
        <nav className="Navbar">
            <div className="container">
                <div className="navbar__content">
                    <ul>
                        <li>
                            <Link to="/">হোম</Link>
                        </li>
                        <li>
                            <Link to="/customar-service">কাস্টমার সার্ভিস</Link>
                        </li>
                        <li>
                            <Link to="/admin">এডমিন</Link>
                        </li>
                        <li>
                            <Link to="/sub-admin">সাব এডমিন</Link>
                        </li>
                        <li>
                            <Link to="/super-agent">সুপার এজেন্ট</Link>
                        </li>
                        <li>
                            <Link to="/master-agent">মাস্টার এজেন্ট</Link>
                        </li>
                        {user?.role === "admin" && (
                            <li>
                                <button onClick={handleLogout}>log out</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;