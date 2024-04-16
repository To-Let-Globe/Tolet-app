import '../style/navbar.css';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = ['home', 'about', 'contact', 'blog', 'login'];

            // Check if contact section is in view
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setContactVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }

            
            let activeSection = 'home'; 
            for (const section of sections) {
                const element = document.getElementById(section);
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [contactVisible]);

    const handleContactClick = () => {
        setActiveLink('contact');
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img  className={`logo ${scrolled ? 'scrolled' : ''}`}  src={logo} alt="LOGO" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={(activeLink === 'contact' || contactVisible) ? 'active navbar-link' : 'navbar-link'} onClick={handleContactClick}>Contact</Nav.Link>
                        <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'}>Blog</Nav.Link>
                        <Nav.Link as={Link} to="/login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
