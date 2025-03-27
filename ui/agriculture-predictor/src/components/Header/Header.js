import { FaReact, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaCog } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  return (
    <div id="header" className="header-container">
      {/* REPLACE WITH OUR LOGO - PLACEHOLDER*/}
      <div className="logo">
        <FaReact className="logo-icon" />
      </div>

      <nav className="nav-links">
        <a href="#mission">Mission</a>
        <a href="#prediction-tool">Prediction Tool</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="socials">
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
        <FaCog className="icon" />
      </div>
    </div>
  );
};
