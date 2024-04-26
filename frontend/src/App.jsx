import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Contact } from './components/contactus';
import { Login } from './components/login';
import { Blog } from './components/blog';
import {AboutUs} from './components/aboutus';
import 'bootstrap/dist/css/bootstrap.css';
import Service from './components/Service'
function App() {
  return (
   /* <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/about/*" element={<AboutUs />} />
          <Route path="/service/*" element={<Service/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>*/
    <Service/>
   
);
}

export default App;
