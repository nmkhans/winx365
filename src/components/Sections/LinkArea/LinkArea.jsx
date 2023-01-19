import React from 'react';
import "./LinkArea.scss";

const LinkArea = () => {
    return (
        <section className="LinkArea">
            <div className="container">
                <div className="link__content">
                    <div className="link__content__header">
                        <h3>আমাদের লিংক সমুহ</h3>
                    </div>
                    <div className="link__content__body">
                        <div className="link__list">
                            <h4>ইউজার লিংকঃ</h4>
                            <a href="https://winx365.online">winx365.online</a>
                        </div>
                        <div className="link__list">
                            <h4>এজেন্ট লিংকঃ</h4>
                            <a href="https://ag.winx365.live">ag.winx365.live</a>
                        </div>
                        <div className="link__list">
                            <h4>এজেন্ট লিস্ট লিংকঃ</h4>
                            <a href="https://winx365.online">winx365.online</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkArea;