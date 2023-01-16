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
                            <Link to="/">Customar Service</Link>
                        </li>
                        <li>
                            <Link to="/">Admin</Link>
                        </li>
                        <li>
                            <Link to="/">Sub Admin</Link>
                        </li>
                        <li>
                            <Link to="/">Super Admin</Link>
                        </li>
                        <li>
                            <Link to="/">Master Agent</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;