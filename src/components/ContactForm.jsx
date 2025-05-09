import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Email" required />
        <input type="text" placeholder="Company" required />
        <select required>
          <option value="">License Type</option>
          <option>Windows</option>
          <option>Office</option>
          <option>Adobe</option>
        </select>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
