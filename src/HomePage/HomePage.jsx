import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../HomePage/HomePage.css'
import { FaPlus } from "react-icons/fa";
// import{DB_ID, COLLECTION_ID,databases,ID} from '../appwrite';
// import {useEffect} from 'react';
import { account } from '../appwrite';
function Homepage() {
  const[modal,setModal] = useState(false);


  const handleModal = () => {
    setModal(!modal);
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

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');  
      console.log('Logged out successfully');
      navigate('/');  
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
/*------------------------------ modal  Data------------------------------------------
const [suggestions, setSuggestions] = useState([]);
  const [texts, setTexts] = useState('');

  useEffect(() => {
    getSuggestions();
  },[]);
   const getSuggestions = async ()=>{
    try{
        const response = await databases.listDocuments(DB_ID, COLLECTION_ID);
        console.log(response);
        setSuggestions(response.documents);
       }
    catch(error){
      console.error(error);
    }}
    const addSuggestion = async (e)=>{
      try{
       e.preventDefault();
       if(texts){
         await databases.createDocument(DB_ID, COLLECTION_ID,ID.unique(),
           {title : texts,},{full_name : texts,},{age : texts,},
           {date_time : texts,},{email : texts,},{gender : texts,}
           ,{type : texts,}
       );
         setTexts('');
         getSuggestions();
     }
     }catch(error){
       console.error(error);
     }};
  function handleChange(e){
    setTexts(e.target.value)
  }
/*------------------------------ modal  Data------------------------------------------*/
  return (
    <div className="homepage">
      <header>
        <nav>
          <div className="logo">YourLogo</div>
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
       <div className="homeContainer">
           <h1 className="homeTitle">Task Management</h1>
           <p className="homePara">We help you manage your tasks efficiently</p>
           <button className="btn homeBtn" onClick={handleModal}><FaPlus /> Create Task</button>
       </div>
       {/* {modal && (<div className="modal-container">
        <div className="overlay"></div>
             <div className="modal">
              <form onSubmit={addSuggestion}>
               <h2 className="taskhead">Add New Task</h2>
               <label className="taskTitle">Task Title</label><br />
               <input type="text" placeholder="Enter  Task Name" className="taskinput" value={texts} onInput={handleChange} required/><br />
               <label className="taskTitle">Full_Name</label><br />
               <input type="text" placeholder="Enter your Full Name" className="taskinput" value={texts} onInput={handleChange} required/><br />
               <label className="taskTitle">Age</label><br />
               <input type="number" placeholder="Enter your age" className="taskinput" value={texts} onInput={handleChange} required/><br />
               <label className="taskTitle">Gender</label><br />
               <select className="taskinputs" onInput={handleChange} required>
               <option value="Male" selected>Male</option>
               <option value="Female">Female</option>
               <option value="Transgender">Transgender</option></select><br />
               <label className="taskTitle">Date_Time</label><br />
               <input type="datetime-local" placeholder="Enter a Task Name" className="taskinput" onInput={handleChange} required/><br />
               <label className="taskTitle">Email</label><br />
               <input type="email" placeholder="Enter a Task Name" className="taskinput" onInput={handleChange} required/><br />
               <label className="taskTitle">Type</label><br />
               <select className="taskinputs" onInput={handleChange} required>
               <option value="" selected>participants</option>
               <option value="">Service_provider</option></select><br />
               <button type="submit" onClick={handleModal} className="taskbtn">Save</button>
               </form>
             </div>
       </div>)} */}
       <div className="tasktitle">

       </div>
      {/* <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Dead Line</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((item) => (
            <tr key={item.$id}>
              <td>{item.title}</td>
              <td>{item.full_name}</td>
              <td>{item.date_time}</td>
              <td>{item.type}</td>
              
            </tr>
          ))}
        </tbody>
      </table> */}
       <div>
    </div>
      </div>
      )}
      export default Homepage;