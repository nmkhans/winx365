import React from 'react';
import "./AgentRules.scss";

const AgentRules = () => {
    return (
        <section className="AgentRules">
            <div className="container">
                <div className="agentRules__content">
                    <div className="agentRules__header">
                        <h3>এজেন্ট হওয়ার নিয়ম এবং শর্ত সমূহঃ</h3>
                    </div>
                    <div className="agentRules__body">
                        <ul>
                            <li>★সুপার এজেন্ট শুধু মাত্র এডমিন দিতে পারে। </li>
                            <li>★মাষ্টার এজেন্ট শুধু মাত্র সুপার এজেন্টরা দিতে পারে।
                                সুপার এজেন্ট নিতে এডমিন এবং অনলাইন-লোকাল এজেন্ট নিতে সুপার এজেন্টদের সাথে যোগাযোগ করুন। </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentRules;