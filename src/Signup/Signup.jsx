import './Signup.css';
import { account,Permission} from '../appwrite';
import {useState} from 'react';
import{DB_ID, COLLECTION_ID,databases,ID} from '../appwrite';
import { useNavigate } from'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { FaMobile } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
function Signup() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [userData , setUserData] = useState(
    {name:"",
    email:"",
    password:"",
    re_enter_password: '',
    gender:"",
    type:"",
    mobile_no:"",
    address: '',
    dob: ''});
  
  const handleRegistration = async (e) => {
    try{
    setLoading(true);
    e.preventDefault();
    const signPromise = await account.create(ID.unique(), userData.email,userData.password)
    console.log(signPromise)
    
    const documentResponse = await databases.createDocument(
      DB_ID,     
      COLLECTION_ID, 
      ID.unique(),    
      {
        name: userData.name,
        email: userData.email,
        password:userData.password,
        re_enter_password:userData.re_enter_password,
        gender: userData.gender,
        type: userData.type,
        mobile_no: userData.mobile_no,
        address: userData.address,
        dob: userData.dob,
      },
      [
        Permission.read('any'),
        Permission.write('any') 
      ]
    );
    console.log('Document added', documentResponse);
    setLoading(false);
    navigate('/')
  } 
  catch (error) {
    console.error('Invalid Data', error);
  }
   if (userData.password !== userData.re_enter_password) {
      alert('Password does not match!');
    }
    
};

  return (
    <div className="cardContainer"> 
       <form onSubmit={handleRegistration}>
       <h1 className="logintitle">SIGN UP HERE</h1>
       <div className="input-boxs">
       <input type="name" className="inputName" placeholder="Enter Name" required  onChange={(e) => setUserData({...userData , name: e.target.value})} />
       <FaUser className="icon"/>
       </div>
       <div className="input-boxs">
       <input type="email" className="inputName" placeholder="Enter Email" required  onChange={(e) => setUserData({...userData , email: e.target.value})} />
       <MdEmail className="icon"/>
       </div>
       <div className="input-boxs">
       <input type="password"
              className="inputName" 
              placeholder="Enter Password"
              required  
              onChange={(e) => setUserData({...userData, password: e.target.value})} />
      <RiLockPasswordFill className="icon"/>
       </div>
            
       <div className="input-boxs">
       <input
            type="password"
            className="inputName"
            placeholder="Re-enter Password"
            required
            onChange={(e) => setUserData({ ...userData, re_enter_password: e.target.value })}/>
       <RiLockPasswordFill className="icon"/>
       </div>
       <div className="input-boxs">
       <input
            type="date"
            className="inputName"
            required
            onChange={(e) => setUserData({ ...userData, dob: e.target.value })}/>
       <CgCalendarDates className="icon"/>
       </div>
          <div className="input-boxs">
          <input
            type="tel"
            className="inputName"
            placeholder="Enter Mobile Number"
            pattern="[0-9]{10}"
            required
            onChange={(e) => setUserData({ ...userData, mobile_no: e.target.value })}/>
          <FaMobile className="icon"/>
          </div>
          <div className="input-boxs">
          <input
            type="text"
            className="inputName"
            placeholder="Enter Address"
            required
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}/>
            <FaAddressBook className="icon"/>
            </div>
            <div className="input-boxs">
       <select
            required
            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
          <IoIosArrowDropdownCircle className="icon"/>
       </div>
           
       <div className="input-boxs">
            <select
            required
            placeholder="Enter Address"
            onChange={(e) => setUserData({ ...userData, type: e.target.value })}>
            <option value="">Select Type</option>
            <option value="Participants">Participants</option>
            <option value="Service_provider">Service_provider</option>
          </select>
          <IoIosArrowDropdownCircle className="icon"/>
          </div>
           {!loading &&  <button type="submit" className="button" >Sign up</button>}
           {loading && <button type="submit" className="button">...Loading</button>}
           <p className="loginPara"> Already Registered! <a href="/" className="link">Login here</a></p>
        </form>
        
        </div>
  )
}

export default Signup;