import React from 'react';
import "./AgentType.scss";
import { useNavigate } from 'react-router-dom';

const AgentType = () => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url)
    }

    return (
        <section className="AgentType">
            <div className="container">
                <div className="agentType__content">
                    <div className="agentType__header">
                        <h3>
                            এজেন্ট কতো প্রকারঃ
                        </h3>
                    </div>
                    <div className="agentType__body">
                        <div className="agent__types">
                            <p><span onClick={() => handleNavigate("/super-agent")}>অনলাইন সুপার এজেন্ট লিস্টঃ</span> সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।</p>
                        </div>
                        <div className="agent__types">
                            <p>
                                <span onClick={() => handleNavigate("/master-agent")}>অনলাইন মাষ্টার এজেন্ট লিস্টঃ</span> অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। মাষ্টার এজেন্ট এর নামের পাশে সুপার এজেন্ট দের নাম লিখা আছে।</p>
                        </div>
                        <div className="agent__types">
                            <p>
                                <span onClick={() => handleNavigate("/master-agent")}>লোকাল মাষ্টার এজেন্ট লিস্টঃ</span> লোকাল মাষ্টার এজেন্টরা শুধু ইউজার একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজারকে নিজ দায়িত্বে লেনদেন করতে হবে।তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না। লোকাল মাষ্টার এজেন্ট সাধারণত– নিজের এলাকায় বা পরিচিতদের সাথে লেনদেন করে ।যারা আগে বাজি ধরিয়ে দিত,তাদের কেই মূলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্টরা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়।লোকাল এজেন্টদের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না,আর করে থাকলে তার দায়ভার পুরোটাই আপনার।</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentType;