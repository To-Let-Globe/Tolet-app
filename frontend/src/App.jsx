import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Contact } from './components/contactus';
import { Login } from './components/login';
import { Mainhome } from './components/mainHome';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Mainhome  />} />
          <Route path="/" element={<Home  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/login/*" element={<Login  />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
