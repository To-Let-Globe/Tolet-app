import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
// import { Nav } from './components/nav';

// import { Home } from './components/home/home';
import { Layout } from './components/layout';
import { Contact } from './components/contact/contactus';
import  {BlogPage1 } from './components/blog/blogpage1';
import  {BlogPage2 } from './components/blog/blogpage2';
import  {BlogPage3 } from './components/blog/blogpage3';
import  {BlogPage4 } from './components/blog/blogpage4';
import { Blog } from './components/blog/blog';
import {AboutUs} from './components/about/aboutus';
import { Login } from './components/login';
import {Service} from './components/service';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <NavBar />
      {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blogpage-1" element={<BlogPage1 />} />
          <Route path="/blog/blogpage-2" element={<BlogPage2 />} />
          <Route path="/blog/blogpage-3" element={<BlogPage3 />} />
          <Route path="/blog/blogpage-4" element={<BlogPage4 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/about/" element={<AboutUs />} />
        </Routes>
        
      </BrowserRouter>
    </div>
   
);
}

export default App;
