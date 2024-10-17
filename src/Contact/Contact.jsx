import {useState} from 'react';
import './Contact.css'
const Contact = () => {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="App">
        <button className="sign-in-button">Sign in with Google</button>
          <h2 className="email-header">Send an Email</h2>
          <form className="email-form">
            <div className="input-container">
              <label htmlFor="recipient">Recipient:</label>
              <input type="email" id="recipient" placeholder="example@gmail.com" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="button-container">
              <button className="send-button" >Send Email</button>
              <button className="sign-out-button">Sign Out</button>
            </div>
          </form>
    </div>
  );
};

export default Contact;
