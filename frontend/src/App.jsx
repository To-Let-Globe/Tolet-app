import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
// import { Home } from './components/home/home';
import { Contact } from './components/contactus';
import { Login } from './components/login';
import { Blog } from './components/blog/blog';
import {AboutUs} from './components/aboutus';
import {Service} from './components/service';
import {BlogPage} from './components/blog/blogpage';
import { Layout } from './components/layout';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
   
);
}

export default App;
