import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../HomePage/HomePage.css'
import { FaPlus } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { DB_ID, databases, ID, TASK_COLLECTION } from '../appwrite';
import { useEffect } from 'react';
import { account } from '../appwrite';
import logos from '../assests/glogo.png';

function Homepage() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleModal = () => {
    setModal(!modal);
  }
  const handleCloseModal = () => {
    setModal(false);
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate('/About');
  }
  const handleContact = () => {
    navigate('/Contact');
  }
  const handleService = () => {
    navigate('/Service');
  }
  const handleHome = () => {
    navigate('/HomePage');
  }
  const handleRegister = ()=>{
    navigate('/userRegister')
  }

  const handleLogout = async () => {
    console.log(account);
    try {
      await account.deleteSession('current');
      console.log('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  const [suggestions, setSuggestions] = useState([]);
  const [userData, setUserData] = useState(
    {
      title: "",
      description: "",
      location:"",
      event_time: "",
      dead_line: "",
    });

  useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = async () => {
    try {
      const response = await databases.listDocuments(DB_ID, TASK_COLLECTION);
      console.log(response);
      setSuggestions(response.documents);
    }
    catch (error) {
      console.error(error);
    }
  }
  const addSuggestion = async () => {

    try {
      setLoading(true)
      const documentResponse = await databases.createDocument(
        DB_ID,
        TASK_COLLECTION,
        ID.unique(),
        {
          title: userData.title,
          description: userData.description,
          location:userData.location,
          event_time: userData.event_time,
          dead_line: userData.dead_line,
        }
      );
      console.log('Document added', documentResponse);

    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };
  

  return (
    <div className='bg-homepage'>
    <div className="homepage">
      <header>
        <nav>
          <div className="logo">
          <img src={logos} alt="logo" className="logoimg" />
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="/HomePage" className="list" onClick={handleHome}>Home</a></li>
            <li><a href="/About" onClick={handleAbout}>About</a></li>
            <li><a href="/Service" onClick={handleService}>Service</a></li>
            <li><a href="/Contact" onClick={handleContact}>Contact</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
          <div className="bar" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
      <div className="homeContainer" draggable>
        <h1 className="homeTitle">Task Management</h1>
        <p className="homePara">We help you manage your tasks efficiently</p>
        <button className="btn homeBtn" onClick={handleModal}><FaPlus /> Create Task</button>
      </div>
      {modal && (<div className="modal-container">
        <div className="overlay"></div>
        <div className="modal">
          <form>
            <button onClick={handleCloseModal} className="closebtn"><IoIosCloseCircle /></button>
            <h2 className="taskhead">Add New Task</h2>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder="Enter  Task Name" className="taskinput" onChange={(e) => setUserData({ ...userData, title: e.target.value })} required /><br />
            <label htmlFor="description">Description:</label>
            <textarea type="text" id="description" placeholder="Description" className="taskinput" onChange={(e) => setUserData({ ...userData, description: e.target.value })} required /><br />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" placeholder="Location" className="taskinput" onChange={(e) => setUserData({ ...userData, location: e.target.value })} required /><br />
            <label htmlFor="event">Event-Time:</label>
            <input type="datetime-local" id="event" placeholder="Enter a Task Name" className="taskinput" onChange={(e) => setUserData({ ...userData, event_time: e.target.value })} required /><br />
            <label htmlFor="dead">Dead-Line:</label>
            <input type="datetime-local" id="dead" placeholder="Enter a Task Name" className="taskinput" onChange={(e) => setUserData({ ...userData, dead_line: e.target.value })} required /><br />
            <button onClick={handleCloseModal} className="taskbtn">Cancel</button>
            <button type="submit" onClick={() => { handleModal(); addSuggestion(); }} className="taskbtn">Save</button>
          </form>
        </div>
      </div>)}
      <div className="taskcard">
        {suggestions.map((item) => (
          <div className="taskconatinercard"  key={item.id}>
            <h1>Titile : {item.title}</h1>
            <p>Description : {item.description}</p>
            <p>Location : {item.location}</p>
            <p>Event-Time: {new Date(item.event_time).toLocaleString()}</p>
            <p>Dead-Line: {new Date(item.dead_line).toLocaleString()}</p>
            <button onClick={handleRegister} className="taskregister">Register Here</button>
          </div>))}
      </div>
      </div>
    </div>
  )
}
export default Homepage;