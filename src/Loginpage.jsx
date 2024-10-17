import {ID , account} from './appwrite.jsx';
import {useState} from 'react'
function Loginpage() {

  const [logIn, setLogIn] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const userLogin = () => {
    login(email, password)
  }

  const login = async (email, password) => {
try{
    await account.createEmailPasswordSession(email, password);
    setLogIn(await account.get());
  }
  catch(error){
    console.log(error);
  }};

  return (
    <div>
        <form>
      <input type="name" placeholder='enter name' value={name} onChange={e => setName(e.target.value)}/><br />
      <input type="email" placeholder='enter email' value={email} onChange={e => setEmail(e.target.value)}/><br />
      <input type="password" placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)}/><br />
      <button type="button" onClick={()=> {userLogin(); handleNavigate();}}>Login</button>
     </form>
    </div>
  )
}

export default Loginpage