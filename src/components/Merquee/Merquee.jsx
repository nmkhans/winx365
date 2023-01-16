import React from 'react';
import Marquee from "react-fast-marquee";
import "./Merquee.scss"

const Merquee = () => {
    return (
        <div className="Marquee">
            <div className="container">
                <div className="marquee__content">
                    <Marquee gradient={false}>
                        Full premium Site For Casino Lovers www.winx365.info এ যারা এজেন্ট নিয়ে কাজ করতে চান তারা এডমিন অথবা সুপার এজেন্টদের সাথে যোগাযোগ করুন।
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Merquee;