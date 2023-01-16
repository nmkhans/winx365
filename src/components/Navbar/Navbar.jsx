import React from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;