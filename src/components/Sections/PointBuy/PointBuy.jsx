import React from 'react';
import "./PointBuy.scss";

const PointBuy = () => {
    return (
        <section className="PointBuy">
            <div className="container">
                <div className="pointBuy__content">
                    <div className="pointBuy__header">
                        <h3>
                            পয়েন্ট কেনা-বেচাঃ
                        </h3>
                    </div>
                    <div className="pointBuy__body">
                        <ul>
                            <li>★এজেন্ট উপরক্ত সাইট থেকে ১ PBU কিনবে ৭৫ টাকা করে।</li>
                            <li>★এজেন্ট ইউজার এর কাছে বিক্রি করবে ১০০ টাকা করে।</li>
                            <li>★এইখানে এজেন্ট এর লাভ থাকবে প্রতি PBU তে ২৫ টাকা।</li>
                            <li>★এজেন্ট ইউজার এর কাছ থেকে পয়েন্ট কিনবে প্রতি পয়েন্ট ১০০ টাকা করে।</li>
                            <li>★এজেন্ট উপরক্ত সাইট এর কাছে বিক্রি করবে প্রতি পয়েন্ট ৭৫ টাকা করে।</li>
                        </ul>
                        <p>এইখানে এজেন্ট এর লস হবে ২৫ টাকা কিন্তু এইখানে কথা আছে
                            প্রথম ২ মাসের মধ্যে এজেন্ট উপরক্ত সাইট থেকে যত পয়েন্ট কিনবে তার থেকে যদি বিক্রি বেশি হয় - এই ২৫ টাকা লসের মধ্যে ১০% এর দায়ভার উপরক্ত সাইট নিবে।</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PointBuy;