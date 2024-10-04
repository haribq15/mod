// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const initialState = {
    name: '',
    dob: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or email service
    console.log(formData);
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {submitted && <p className="success-message">Thank you for your message!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
