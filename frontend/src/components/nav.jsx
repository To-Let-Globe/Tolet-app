import { Link } from "react-router-dom";
import "../style/nav.css";
import Logo from "../assets/img/Favicon.png";
import { useState } from "react";

export const Nav = () => {

    const [activeLink, setActiveLink] = useState('home');
 
    const handleHomeClick = () => {
        setActiveLink('home');
    };
    const handleContactClick = () => {
        setActiveLink('contact');
    };
    const handleAboutClick = () => {
        setActiveLink('about');
    };
    const handleBlogClick = () => {
        setActiveLink('blog');
    };
    const handleServiceClick = () => {
        setActiveLink('service');
    };
    const handlePropertyListingClick = () => {
        setActiveLink('property');
    };


  return (
    <nav className='navbar navbar-expand-lg'>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars" style={{color:'white'}}></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className={`nav-link ${activeLink === 'service' ? 'active' : ''}`} onClick={handleServiceClick}>
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`} onClick={handleBlogClick}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={handleContactClick}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={handleAboutClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/property-listing" className={`nav-link ${activeLink === 'propertyListing' ? 'active' : ''}`} onClick={handlePropertyListingClick}>
                Property Listing
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};
