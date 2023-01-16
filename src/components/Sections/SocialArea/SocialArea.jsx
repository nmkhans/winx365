import React from 'react';
import "./SocialArea.scss";

const SocialArea = () => {
    return (
        <section className="SocialArea">
            <div className="container">
                <div className="socialArea__content">
                    <div className="social__header">
                        <h3>
                            সোশাল মিডিয়াঃ
                        </h3>
                    </div>
                    <div className="social__body">
                        <p> আমাদের সম্পর্কে জানতে জয়েন হতে পারেন আমাদের ফেসবুক গ্রুপ এ । অথবা আমাদের সম্পর্কে আরো নিত্য নতুন আপডেট পেতে জয়েন হতে পারেন আমাদের সিক্রেট গ্রুপে। </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialArea;