import React from 'react';
import banner from "../../assets/banner.jpg"
import "./Banner.scss";

const Banner = () => {
    return (
        <section className="Banner">
            <div className="container banner__content">
                <div className="banner__image">
                    <img src={banner} alt="Banner Image" />
                </div>
            </div>
        </section>
    );
};

export default Banner;