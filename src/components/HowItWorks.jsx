import React from 'react';
import { FaUpload, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import '../styles/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <FaUpload size={32} />
          <p>Upload License</p>
        </div>
        <div className="step">
          <FaDollarSign size={32} />
          <p>Get Valuation</p>
        </div>
        <div className="step">
          <FaMoneyBillWave size={32} />
          <p>Get Paid</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;