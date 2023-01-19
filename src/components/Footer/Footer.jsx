import React from 'react';
import "./Footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const date = new Date();
    const year = date.getFullYear();

    const handleRedirect = (url) => {
        navigate(url)
    } 

    return (
        <footer className="Footer">
            <div className="container">
                <div className="footer__content">
                    <p><span onClick={() => handleRedirect("/login")}>Copyright</span> &copy; {year} winx365.live All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;