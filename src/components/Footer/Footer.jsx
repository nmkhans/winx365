import React from 'react';
import "./Footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/login")
    } 
    return (
        <footer className="Footer">
            <div className="container">
                <div className="footer__content">
                    <p><span onClick={handleRedirect}>Copyright</span> @ 2022 winx365.live  All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;