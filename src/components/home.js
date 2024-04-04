import '../style/home.css';
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {

  return (
    <section className='home' id='home'>
      <Container>
        <Row className='align-item-center'>
          <Col xs={12} md={6} mt={10} xl={6}>
            <h1 className='tagline'>Welcome to To-Let Globe</h1>
            <h6>{`NO BROKERAGE ON`}<span className='wrap'> PGS | FLATS | HOUSES | OFFICES </span></h6>
            <InputGroup className='mb-3 mt-2'>
              <Form.Control
                placeholder="Search PG, Flats and Houses"
                aria-label="Search PG, Flats and Houses"
              />
              <Button onClick={()=> console.log('connect')}>
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className='image-container'>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
