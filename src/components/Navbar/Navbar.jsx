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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/customar-service">Customar Service</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/sub-admin">Sub Admin</Link>
                        </li>
                        <li>
                            <Link to="/super-admin">Super Admin</Link>
                        </li>
                        <li>
                            <Link to="/master-agent">Master Agent</Link>
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