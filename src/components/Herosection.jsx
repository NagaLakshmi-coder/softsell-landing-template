import React from 'react';
import '../styles/HeroSection.css';
import logo from '../assets/logo.png'; // adjust the path as per your project structure

function HerSection() {
  return (
    <section className="hero">
      <img src={logo} alt="Company Logo" className="hero-logo" />
      <h1>Welcome to SoftSell</h1>
      <p>Your trusted software marketing partner.</p>
    </section>
  );
}



function HeroSection() {
  return (
    
    <section className="hero">
      <img src={logo} alt="Company Logo" className="hero-logo" />
      <h1>Welcome to SoftSell</h1>
      <p>Your trusted software marketing partner.</p>
      <h1>Resell Your Unused Software Licenses</h1>
      <p>Easily turn your surplus software licenses into cash.</p>
      <button>Sell My Licenses</button>
    </section>
  );
}

export default HeroSection;
