import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form data as the user types
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Handle form submission (currently logs data to the console)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Clear the form (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Drop us an email or connect with us on social media.</p>
      
      <div className="contact-details">
        <a href="mailto:info@company.com">info@company.com</a>
        <div className="social-links">
          <a href="https://twitter.com/company" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/company/company" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      
      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
