import { Link } from "react-router-dom";
import "../style/nav.css";
import Logo from "../assets/img/Favicon.png";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

export const Nav = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [contactVisible, setContactVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [blogVisible, setBlogVisible] = useState(false);
    const [serviceVisible, setServiceVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = ['home', 'about', 'contact', 'blog', 'login','service'];

            // Check if contact section is in view
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setContactVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setAboutVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const serviceSection = document.getElementById('about');
            if (serviceSection) {
                const rect = serviceSection.getBoundingClientRect();
                setServiceVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                const rect = blogSection.getBoundingClientRect();
                setBlogVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }

            
            let activeSection = 'home'; 
            for (const section of sections) {
                const element = document.getElementById('home');
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        activeSection = section;
                        break;
                    }
                }
            }

            setActiveLink(contactVisible ? 'contact' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(serviceVisible ? 'service' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(aboutVisible ? 'about' : activeSection);
            setScrolled(scrollY > 50);
            setActiveLink(blogVisible ? 'blog' : activeSection);
            setScrolled(scrollY > 50);
           
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [contactVisible,aboutVisible,blogVisible, serviceVisible]);

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
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" style={{ height: '60px', width:'auto' }} />
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
