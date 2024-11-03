import {useState} from 'react'
import '../About/About.css';
import {useNavigate} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import img1 from '../assests/img1.jpg';
import img2 from '../assests/img2.jpg';
import img3 from '../assests/img3.jpg';
import img6 from '../assests/img6.jpg';
import logos from '../assests/glogo.png';
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  return (
    <div className='bgabout'>
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
    <div className="aboutContainer">
      <h1>About Us</h1>
      <p className="aboutpara">We are a company dedicated to providing top-notch solutions for our clients. </p>
      <button className="aboutbtn" onClick={handleBack}><HiOutlineArrowCircleLeft /></button>
      <img src={img6} alt="Card 4" className="aboutimage" />
      <h1 className="abouthead">WE DO THINGS DIFFERENTLY</h1>
      <div className="aboutcard">
        <img src={img2} alt="Card 1" className="aboutimg" />
        <h2 className="cardhead">Care about our team </h2>
        <p className="cardpara">Understand what matters to our employees. Give them what they need to do their best work</p>
      </div>
      <div className="aboutcard">
        <img src={img1} alt="Card 2" className="aboutimg" />
        <h2 className="cardhead">Pride in what we do</h2>
        <p className="cardpara">Value quality and integrity in everything we do. At all times. No exceptions</p>
      </div>
      <div className="aboutcard">
        <img src={img3} alt="Card 3" className="aboutimg" />
        <h2 className="cardhead">Do the impossible</h2>
        <p className="cardpara">Be energized by difficult problems. Revel in unknowns. Ask Why? , but always question, why not?</p>
      </div>
      <div className="socialMedia">
        <a href="https://www.facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://www.twitter.com" target="_blank"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank"><PiInstagramLogoFill /></a>
      </div>
      </div>
      </div>
  )
}

export default About