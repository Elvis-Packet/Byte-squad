import './Contact.css';

function Contact() {
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
      
      <form 
        className="contact-form" 
        action="https://formspree.io/f/xanqbdwv"  // Replace with your Formspree endpoint
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
