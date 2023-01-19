import React from 'react';
import "./AgentInfo.scss";
import { Link } from "react-router-dom";

const AgentInfo = () => {
    return (
        <section className="AgentInfo">
            <div className="container">
                <div className="agentInfo__content">
                    <div className="agentInfo__header">
                        <h3>
                            এজেন্ট লিস্টঃ
                        </h3>
                    </div>
                    <div className="agentInfo__body">
                        <p>একাউন্ট খুলতে নিম্নে অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিস্টে যাদের নাম আছে - তাদের ফেসবুক লিঙ্ক এর উপরে ক্লিক করলে ফেসবুক আইডি আসবে অথবা ফেসবুক আইকন এর উপরে ক্লিক করলে ফেসবুক এপ দিয়ে আইডি ওপেন হবে। এই সব এজেন্ট এর নামে ডুপ্লিকেট বা ফেইক আইডি থাকতে পারে। তাই এই সব এজেন্ট দের নাম ফেইসবুকে সার্চ না করে - লিঙ্ক এ ক্লিক করে যোগাযোগ করুন। <Link to="/master-agent">অনলাইন মাষ্টার এজেন্ট লিস্টঃ</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentInfo;