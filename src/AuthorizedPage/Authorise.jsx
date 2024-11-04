import './Authorise.css';
import {databases,DB_ID,COLLECTION_ID} from '../appwrite';
// import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Query } from 'appwrite';
function Authorise() {
  const [loader,setLoader] = useState(true);
  const navigate = useNavigate();
    // const [authorized,setAuthorized] = useState(false);
    

const handleback= ()=>{
  navigate('/')
}
const checkauthorize = ()=>{

}
  const {uniqueId} = useParams();
  useEffect(() => {
    const checkUser_id = async () => {
      try {
        console.log('>>>>>>>',uniqueId);
        const checkauthorize = await databases.listDocuments(DB_ID,COLLECTION_ID,
         [
          Query.equal('user_id',uniqueId)
         ]
        );
        const checkauthorized = await databases.listDocuments(DB_ID,COLLECTION_ID,
          [Query.equal("authorise",false)]
         );
        checkauthorized.documents.forEach(async (document) => {
          await databases.updateDocument(DB_ID, COLLECTION_ID, document.$id, {
            authorise: true,
          });
        });
         
        console.log('>>>>>>>>',checkauthorize);
        if (checkauthorize.length > 0) {
          console.log(checkauthorized.documents)
          console.log('user_id', checkUser_id);
        }
        else {
          console.log("already verified");
        }
        setLoader(false);
      } catch (error) {
        console.log('No active session:', error.message);
      }
    };
    
    checkUser_id();
    
  },[uniqueId]);


  

  return (
    <div className='authpage'>
        {!loader &&<p className="authLoader">...Loading</p>}
        <br />
        {checkauthorize.length==1 ? <>{!loader && ( <div className="registerpage">
        <h1>Account Verified Succesfully</h1>
        <p>Hey user, your account has been Succesfully verifed </p>
        <button onClick={handleback}>Please Login</button> 
         {/* <ToastContainer/> */}
        
        </div>)}</>:<><p className="authpara"> you have already Verified</p>
        <button className='authbtn' onClick={handleback}>Please Login</button></>}
        </div>
  )
}

export default Authorise;

