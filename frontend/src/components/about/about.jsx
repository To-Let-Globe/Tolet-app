import React from 'react';
import '../../style/about/aboutus.css';
import image1 from '../../assets/image/about/image1.svg';
import image2 from '../../assets/image/about/image2.svg';
import image3 from '../../assets/image/about/image3.svg';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="AboutUS-Container">
            <h2>About Us</h2>
            <div className='about-container'>
                <Row>
                    <Col md={4}>
                        <h3>Who We Are</h3>
                        <p>
                            An Online Platform where property owners and tenants can directly contact each other with ZERO brokerage.
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src={image1} alt='image1' />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <img src={image2} alt='imag2' />
                    </Col>
                    <Col md={6}>
                        <h3 className="vision-heading">Our Vision</h3>
                        <p>
                            to make it simple for people to search for and rent homes in new cities while doing so from the comfort of their own homes.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h3>Our Mission</h3>
                        <p>
                            to hold To-Let boards at all rental properties available nearby.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={image3} alt='imag3' />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;
