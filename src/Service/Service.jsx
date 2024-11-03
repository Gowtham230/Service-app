import {useState} from 'react';
import './Service.css'
import Service1 from '../assests/Service1.jpg';
import Service2 from '../assests/Service2.jpg';
import Service3 from '../assests/Service3.jpg';
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import logos from '../assests/glogo.png';
function Service() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () =>     {
    window.history.back();
  }
  return (
    <div className="servicepage">
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
            <li><a href="/PageBuilder">PageBuilder</a></li>
            <li><a href="/">Signup</a></li>
          </ul>
          <div className="bar" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
      <button className="servicebtn" onClick={handleClick}>
        <HiOutlineArrowCircleLeft />
      </button>
      <h1 className="serviceHead">What Can I Offer?</h1>
      <div className="servicecard">
        <img src={Service1} alt="Web Development" className="serviceimg" />
        <h3>Web Development</h3>
        <p>
          I specialize in building responsive, high-quality websites using the latest web technologies.
          Whether its a simple landing page or a complex web application, I can bring your ideas to life.
        </p>
      </div>
      <div className="servicecard">
        <img src={Service2} alt="UI/UX Design" className="serviceimg" />
        <h3>UI/UX Design</h3>
        <p>
          Crafting intuitive and beautiful user interfaces is key to providing great user experiences. I focus on creating designs that are both visually appealing and user-friendly.
        </p>
      </div>

      <div className="servicecard">
        <img src={Service3} alt="Search Engine Optimization" className="serviceimg" />
        <h3>Search Engine Optimization (SEO)</h3>
        <p>
          Increase your Websites visibility on search engines with tailored SEO strategies. I can help you optimize your site to rank higher in search results and attract more organic traffic.
        </p>
      </div>
    </div>
  )
}

export default Service