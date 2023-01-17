import React from 'react';
import "./AccountInfo.scss"

const AccountInfo = () => {
    return (
        <section className="AccountInfo">
            <div className="container">
                <div className="accountInfo__content">
                    <div className="accountInfo__header">
                        <h3>
                            কিভাবে একাউন্ট খুলবেন ?
                        </h3>
                    </div>
                    <div className="accountInfo__body">
                        <p>কিভাবে একাউন্ট খুলবেনঃ www.winx365.info/ এ একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। আপনি কিভাবে তার সাথে লেনদেন করবেন আপনার এজেন্ট আপনাকে বলে দিবে। এজেন্ট লিস্ট চেক না করে লেনদেন করলে সমস্ত দায়ভার আপনাকেই বহন করা লাগবে। একাউন্ট খুলতে কি কি প্রয়োজন- আপনি যদি বিকাশ/নগদ/রকেটের মাধ্যমে লেনদেন করতে চান তাহলে অবশ্যই www.winx365.info/ এই সাইটটিতে আপনাকে আমন্ত্রণ জানাচ্ছি।
                        </p>
                        <ul>
                            <li>★আপনার নাম</li>
                            <li>★আপনার ইমেইল আইডি (যদি থাকে আর না থাকলে এজেন্ট বানিয়ে দিবে)</li>
                            <li>★আপনার ফোন নাম্বার </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountInfo;