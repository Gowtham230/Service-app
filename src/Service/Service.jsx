import React from 'react'
import './Service.css'
import Service1 from '../assests/Service1.jpg';
import Service2 from '../assests/Service2.jpg';
import Service3 from '../assests/Service3.jpg';
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import {useNavigate} from 'react-router-dom'
function Service() {
  const navigate = useNavigate();
  const handleClick = () =>     {
    navigate(-1);
  }
  return (
    <div className="servicepage">
      <h1 className="serviceHead">What do I can offer ?</h1>
      <button className="servicebtn" onClick={handleClick}><HiOutlineArrowCircleLeft /></button>
      <div className="servicecard">
        <img src={Service1} alt="Service 1" className="serviceimg"/>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacinia lectus, a euismod felis.</p>
      </div>
      <div className="servicecard">
        <img src={Service2} alt="Service 2" className="serviceimg"/>
        <h3>UI/UX</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacinia lectus, a euismod felis.</p>
      </div>
      <div className="servicecard">
        <img src={Service3} alt="Service 3" className="serviceimg" />
        <h3>Search Engine Optimization</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacinia lectus, a euismod felis.</p>
      </div>
    </div>
  )
}

export default Service