import './Login.css';
import { useNavigate } from 'react-router';
import{useEffect, useState } from 'react';
import { account } from '../appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          console.log('Session already active:', currentSession);
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
    <>
<div className="cardContainer">
<h1 className="title">Welcome back , Please Login</h1>
<p className="loginPara">Please Enter Your Details</p>
   <form onSubmit={handleLogins}>
    <label  className="labelName">Email:
    <input type="email" className="inputName" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/></label><br />
    <label  className="labelName">Password:
    <input type="password" className="inputName" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/></label><br />
    {!status &&  <button type="submit" className="button">Login</button>}
    {status && <button type="submit" className="button">...Loading</button>}
    <ToastContainer />
    </form>
    <p className="loginPara"> Don&apos;t have an account? <a href="/Signup" className="link">Sign up here</a></p>
</div>
</>
  );
};

export default Login;
