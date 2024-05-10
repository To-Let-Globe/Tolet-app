import React, { useState } from 'react';
import { Card, Col, Row, Carousel } from 'react-bootstrap';
import '../style/testimonial.css';

export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="Testimonial-Container">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <Row className="rows-center">
            <Col md={6} className="text-center">
              <h3 className="heading-color">What People Say About Us</h3>
            </Col>
          </Row>
          <Row className="rows-center">
            <Col md={6} className="text-center">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <Card className="card">
                    <Card.Img variant="top" src="path/to/image1.jpg" />
                    <Card.Body>
                      <Card.Title>Testimonial 1</Card.Title>
                      <Card.Text>
                        This is the first testimonial.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="card">
                    <Card.Img variant="top" src="path/to/image2.jpg" />
                    <Card.Body>
                      <Card.Title>Testimonial 2</Card.Title>
                      <Card.Text>
                        This is the second testimonial.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="card">
                    <Card.Img variant="top" src="path/to/image3.jpg" />
                    <Card.Body>
                      <Card.Title>Testimonial 3</Card.Title>
                      <Card.Text>
                        This is the third testimonial.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};