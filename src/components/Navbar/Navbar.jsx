import React from 'react';
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
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;