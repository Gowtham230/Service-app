import DemoPage from '../src/Demo/DemoPage';
import CreateTask from './CreateTask/CreateTask.jsx';
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
// import Login from './Login/Login.jsx';
// import Signup from './Signup/Signup.jsx';
// import HomePage from './HomePage/HomePage.jsx';
// import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom';

// import About from './About/About.jsx';
// import Contact from './Contact/Contact.jsx';
// import Service from './Service/Service.jsx';
// import CreateTask from './CreateTask/CreateTask.jsx';
function App() {
  return (
    <div>
      {/* <Routers>
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Signup" element={<Signup />} />
       <Route path="/HomePage" element={<HomePage />} />
       <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Service" element={<Service />} />
       <Route path="/CreateTask" element={<CreateTask />} />
      </Routes>
      </Routers> */}
      <Routers>
      <Routes>
       <Route path="/" element={<DemoPage />} />
       <Route path="/CreateTask" element={<CreateTask />} />
      </Routes>
      </Routers>
      </div>
  )
}

export default App;