import React from "react";
import "../../style/about/aboutus.css";
import image1 from "../../assets/image/about/image1.svg";
import image2 from "../../assets/image/about/image2.svg";
import image3 from "../../assets/image/about/image3.svg";
import { Col, Row } from "react-bootstrap";

export const About = () => {
  return (
    <div className="AboutUS-Container">
      <h2>About Us</h2>
      <div className="about-container">
        <Row className="rows-center" style={{justifyContent:"space-between"}}>
          <Col md={6} className="text-center"> 
            <h3 className="heading-color">Who We Are</h3>
            <p>
              An Online Platform where property owners and tenants can directly
              contact each other with ZERO brokerage.
            </p>
          </Col>
          <Col md={4} className="text-center"> {/* Center image horizontally */}
            <img src={image1} alt="image1" />
          </Col>
        </Row>

        <Row className="rows-center" style={{justifyContent:"space-between"}}>
          <Col md={4} className="text-center">
            <img src={image2} alt="image2" />
          </Col>
          <Col md={6}>
            <h3 className="vision-heading heading-color">Our Vision</h3>
            <p>
              To make it simple for people to search for and rent homes in new
              cities while doing so from the comfort of their own homes.
            </p>
          </Col>
        </Row>

        <Row className="rows-center" style={{justifyContent:"space-between"}}>
          <Col md={6} className="text-center"> 
            <h3 className="heading-color">Our Mission</h3>
            <p>
            Placing "To-Let" boards at all nearby rental properties to advertise availability to potential tenants.
            </p>
          </Col>
          <Col md={4} className="text-center" > {/* Center image horizontally */}
            <img src={image3} alt="image1" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
