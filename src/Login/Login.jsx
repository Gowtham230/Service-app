import './Login.css';
import { useNavigate } from 'react-router';
import{useEffect, useState } from 'react';
import { account, COLLECTION_ID} from '../appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {databases,DB_ID} from '../appwrite';
  const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status,setStatus] = useState(false);
    

  useEffect(() => {
    
    const checkSession = async () => {
      try {
        const currentSession = await account.get();
        if (currentSession) {
          console.log('Session already active:', currentSession,checkauthorized);
          navigate('/HomePage');
        }
      } catch (error) {
        console.log('No active session:', error.message);
      }
    };
    
checkSession();
    
  }, [navigate]);

  const login = async () => {
    try {
      setStatus(true);
      const session = await account.createEmailPasswordSession(email, password);
      console.log('Login successful:', session);
    } catch (error) {
      setStatus(false);
      toast.error("Invalid Credentials!", { autoClose: 3000 });
      console.error('Login error:', error);
    }
  };
  const handleauthorize = async()=>{
    try{
      const checkauthorized = await databases.listDocuments(DB_ID,COLLECTION_ID,
        [Query.equal("authorise",true)]
       );
       console.log(checkauthorized)
    }
    catch{
      console.log("not verify")
    }
  }
  const handleLogins = (e) => {
    e.preventDefault();
    if (email && password && handleauthorize) {
      login();
    } else {
      console.error('Email or password is missing');
    }
  };


  return (
    <div className="container">
        <form onSubmit={handleLogins}>
            <h1>Login</h1>
            <div className="input-box">
             <input type="text" placeholder="Login" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
             <FaUser className="icon"/>
            </div>
            <div className="input-box">
             <input type="password" placeholder="Enter password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
             <FaLock className="icon"/> 
            </div>
            <div className="remember">
             <label><input type="checkbox"/>Remember Me</label>
             <a href="#">Forgot password?</a>
            </div>
            {!status &&  <button type="submit" className="button">Login</button>}
            {status && <button type="submit" className="button">...Loading</button>}
           <ToastContainer />
            <div className="register">
            <p>Don&apos;t have an account? <a href="/Signup">Register Here</a></p>
            </div>
        </form>
    </div>
  );
};

export default Login;
