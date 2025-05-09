import React from 'react';
import { FaClock, FaShieldAlt, FaCoins } from 'react-icons/fa';
import '../styles/WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features">
        <div className="feature"><FaClock size={28} /><p>Instant Quotes</p></div>
        <div className="feature"><FaShieldAlt size={28} /><p>Secure Transactions</p></div>
        <div className="feature"><FaCoins size={28} /><p>High Payouts</p></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;