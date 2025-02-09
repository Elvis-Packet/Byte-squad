import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">Drop us an email or connect with us on social media.</p>
      
      <div className="contact-details">
        <a href="mailto:info@company.com" className="contact-email">info@company.com</a>
        <div className="social-links">
          <a href="https://twitter.com/company" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://linkedin.com/company/company" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://facebook.com/company" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        </div>
      </div>
      
      <form 
        className="contact-form" 
        action="https://formspree.io/f/xanqbdwv" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required className="form-input" />
        <input type="email" name="email" placeholder="Your Email" required className="form-input" />
        <textarea name="message" placeholder="Your Message" required className="form-textarea" />
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;