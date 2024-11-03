import './Signup.css';
import { account, Permission } from '../appwrite';
import { useState } from 'react';
import { DB_ID, COLLECTION_ID, databases, ID } from '../appwrite';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { FaMobile } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
// import Authorise from '../AuthorizedPage/Authorise.jsx'
// import { useLocation,useParams } from 'react-router-dom';




function Signup() {

  const unique = uuidv4();
  const uniqueId = unique.slice(26)
  console.log(uniqueId);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    re_enter_password: "",
    gender: "",
    type: "",
    mobile_no: "",
    address: "",
    dob: ""
  });

  // const id = queryParams.get('id');
  // const secret = queryParams.get('secret');
  // const { search } = useLocation();
  // const queryParams = new URLSearchParams(search);

  // return <Authorise id={id} secret={secret} />;

  // const {id,secret} = useParams();



  const sendMail = () => {
    const options = {
      method: 'GET',
      url: 'https://vercel-node-vyhj.vercel.app/gmail/sent',
      params: {
        adminMail: 'gowthamwork00@gmail.com',
        passcode: '192.168.29.154',
        to: `["${userData.email}"]`,
        subject: 'Verify Your Account 🍻',
        from: 'santhoshvellingiri100@gmail.com',
        html: `<h1>Hello!</h1> <p>Your account has been successfully created. Please verify your account by clicking the button below.</p>
        <p>UID:${uniqueId}</p><a href="http://localhost:1234/Authorise/${uniqueId}">verify Account</a>`,
        ispasscode: 'false'
      },
      headers: { 'User-Agent': 'insomnia/10.0.0' }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };


  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const signPromise = await account.create(ID.unique(), userData.email, userData.password);
      console.log(signPromise);

      const documentResponse = await databases.createDocument(
        DB_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          re_enter_password: userData.re_enter_password,
          gender: userData.gender,
          type: userData.type,
          mobile_no: userData.mobile_no,
          address: userData.address,
          dob: userData.dob,
          user_id: uniqueId,
        },
        [
          Permission.read('any'),
          Permission.write('any')
        ]
      );
      console.log('Document added', documentResponse);
      setLoading(false);
      if (userData.password !== userData.re_enter_password) {
        alert('Password does not match!');
        toast.error("Password does not match!", { autoClose: 3000 });
      }
      else {
        toast.success("Verification email sent!", { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Invalid Data', error);
      setLoading(false);
    }
  };

  return (
    <div className='bg-signup-container'>
    <div className="cardContainer">
      <form onSubmit={handleRegistration}>
        <h1 className="logintitle">SIGN UP HERE</h1>

        <div className="input-boxs">
          <input
            type="name"
            className="inputName"
            placeholder="Enter Name"
            required
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-boxs">
          <input
            type="password"
            className="inputName"
            placeholder="Enter Password"
            required
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <RiLockPasswordFill className="icon" />
        </div>

        <div className="input-boxs">
          <input
            type="password"
            className="inputName"
            placeholder="Re-enter Password"
            required
            onChange={(e) => setUserData({ ...userData, re_enter_password: e.target.value })}
          />
          <RiLockPasswordFill className="icon" />
        </div>

        <div className="input-boxs">
          <select
            required
            placeholder="Enter Address"
            onChange={(e) => setUserData({ ...userData, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="Participants">Participants</option>
            <option value="Service_provider">Service Provider</option>
          </select>
          <IoIosArrowDropdownCircle className="icon" />
        </div>

        <div className="input-boxs">
          <select
            required
            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
          <IoIosArrowDropdownCircle className="icon" />
        </div>

        <div className="input-boxs">
          <input
            type="date"
            className="inputName"
            required
            onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
          />
          <CgCalendarDates className="icon" />
        </div>

        <div className="input-boxs">
          <input
            type="tel"
            className="inputName"
            placeholder="Enter Mobile Number"
            pattern="[0-9]{10}"
            required
            onChange={(e) => setUserData({ ...userData, mobile_no: e.target.value })}
          />
          <FaMobile className="icon" />
        </div>

        <div className="input-boxs">
          <textarea
            type="text"
            className="inputName"
            placeholder="Enter Address"
            required
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
          />
          <FaAddressBook className="icons" />
        </div>

        {!loading && (
          <button type="submit" className="button" onClick={sendMail}>
            Sign up
          </button>
        )}
        {loading && <button type="submit" className="button">...Loading</button>}
        <p className="loginPara">
          Already Registered? <a href="/" className="link">Login here</a>
        </p>

      </form>
      <ToastContainer />
    </div>
    </div>
  );
}

export default Signup;
