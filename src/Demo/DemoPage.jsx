import '../Demo/DemoPage.css';
import { useNavigate } from 'react-router';
import{useEffect, useState } from 'react';
import { account } from '../appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
function DemoPage() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [status,setStatus] = useState(false);


  useEffect(() => {
    
    const checkSession = async () => {
      try {
        const currentSession = await account.get();
        if (currentSession) {
          console.log('Session already active:', currentSession);
          navigate('/CreateTask');
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
      navigate('/HomePage');
      toast.success('Login Successfully!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Bounce",
        });
      console.log('Login successful:', session);
    } catch (error) {
      setStatus(false);
      toast.error('Invalid email or password!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar:true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Bounce",
        });
      console.error('Login error:', error);
    }
  };

  const handleLogins = (e) => {
    e.preventDefault();
    if (email && password) {
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
             <a href="#">Forgot password</a>
            </div>
            {!status &&  <button type="submit" className="button">Login</button>}
            {status && <button type="submit" className="button">...Loading</button>}
           <ToastContainer />
            <div className="register">
            <p>Don&apos;t have an account? <a href="#">Register Here</a></p>
            </div>
        </form>
    </div>
  )
}

export default DemoPage;