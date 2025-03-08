import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  const handleSubscribeClick = () => {
    console.log("This is WIP");
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-header">Get Our Latest Updates</h2>
          <p className="contact-text">Subscribe to our newsletter for the latest insights.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button" onClick={handleSubscribeClick}>
              Subscribe
            </button>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h2 className="contact-header">Our Contact Info</h2>
          <p className="contact-info"><strong>Email:</strong> example@test.com</p>
          <p className="contact-info"><strong>Phone:</strong> 123-456-7890</p>
          <p className="contact-info"><strong>Location:</strong> 14202 Fletcher Ave, Florida, United States</p>
          <p className="contact-info"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p>
        </div>
      </div>
    </div>
  );
};
