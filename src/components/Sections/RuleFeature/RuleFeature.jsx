import React from 'react';
import feature from "../../../assets/ruleFeature.jpg";
import "./RuleFeature.scss";

const RuleFeature = () => {
    return (
        <section className="RuleFeature">
            <div className="container">
                <div className="ruleFeature__content">
                    <div className="ruleFeature__head">
                        <h3>রুলসঃ</h3>
                    </div>
                    <div className="ruleFeature__body">
                        <img src={feature} alt="rule feature image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RuleFeature;