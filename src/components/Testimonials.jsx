import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>“The process was quick and easy. Highly recommend!”</p>
          <strong>Akhila</strong>
          <span>Office Manager</span>
        </div>
        <div className="testimonial">
          <p>“Great service and fair valuations. Will use again.”</p>
          <strong>Naga Lakshmi</strong>
          <span>IT Director</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
