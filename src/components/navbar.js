import '../style/navbar.css'
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.jpeg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = ['home', 'prop-listing', 'about', 'blog', 'login'];
    
            // Check if contact section is in view
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setContactVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
    
            // Check if other sections are in view
            let activeSection = 'home'; // Default to home if no other section is in view
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
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [contactVisible]);
    

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="LOGO" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                        <Nav.Link href="#prop-listing" className={activeLink === 'prop-listing' ? 'active navbar-link' : 'navbar-link'}>Property Listing</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' || contactVisible ? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
                        <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'}>Blog</Nav.Link>
                        <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}