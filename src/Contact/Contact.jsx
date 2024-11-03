import {useState} from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import './Contact.css'
import logos from '../assests/glogo.png';

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
    <div className='bgcontact'>
    <header>
        <nav>
        <div className="logo">
          <img src={logos} alt="logo" className="logoimg" />
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/HomePage" className="list">Home</a></li>
            <li><a href="/About" >About</a></li>
            <li><a href="/Service">Service</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/">Signup</a></li>
          </ul>
          <div className="bar" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    <div className="App">
        <button className="sign-in-button">Sign in with Google</button>
          <h2 className="email-header">Send an Email</h2>
          <form className="email-form">
            <div className="input-container">
              <label htmlFor="recipient">Recipient:</label>
              <input type="email" id="recipient" placeholder="example@gmail.com" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="button-container">
              <button className="send-button" >Send Email</button>
              
            </div>
          </form>
    </div>
    </div>
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-about">
        <h4>About Us</h4>
        <p>We are a team dedicated to providing the best service and support. Reach out to us for any queries or feedback!</p>
      </div>

      <div className="footer-contact">
        <h4>Contact Info</h4>
        <p>Email: errords4545@gmail.com</p>
        <p>Phone: +1(91)7550326549</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <a className="iconscontact" href="https://www.facebook.com" target="_blank"><FaFacebook /> Facebook</a>
        <a className="iconscontact" href="https://www.twitter.com" target="_blank"><FaTwitter /> Twitter</a>
        <a className="iconscontact" href="https://www.instagram.com" target="_blank"><PiInstagramLogoFill /> Instagram</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Company. All Rights Reserved.</p>
    </div>
  </footer>
  </>
    
  );
};

export default Contact;
