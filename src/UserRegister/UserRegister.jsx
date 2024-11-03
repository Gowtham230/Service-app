import {useState} from 'react';
import './userRegister.css'
import logos from '../assests/glogo.png';
function UserRegister() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='userregister'>
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
      <h1 className='headregister'>User Register</h1>
      <p className='pararegister'>
        The user registers on the platform by providing essential information such as name, 
        email, and contact details. During registration, they create a secure password for future logins.
         Once registered, the user can browse available tasks. To apply for a specific task, the user selects 
         it from the list, reviews the details and requirements, and submits an application, usually including
          additional information like their qualifications, a cover letter, or previous work experience relevant
           to the task. Upon successful application, the user will receive confirmation via email or a dashboard notification.
          </p>
          <button className='buttonregister'>Register Here</button>
    </div>
  )
}

export default UserRegister