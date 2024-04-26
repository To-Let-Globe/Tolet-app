import '../../style/home/home-1.css';
import '../../style/home/home-2.css';
import '../../style/home/home-3.css';
import '../../style/home/home-4.css';
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import { TopImages } from './Tbackground';
import { BottomImages } from './Bbackground';

export const Home = () => {

  const [isScrolled, setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <section className={isScrolled ? "home scrolled" : "home"} id="home">
      <Container fluid className="top-home">
        <Row className="justify-content-center align-items-center h-20">
          <Col xs={12} md={8} lg={6}>
            <h1 className="tagline text-center">Welcome to To-Let Globe</h1>
            <h6 className="headline text-center">
              NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
            </h6>
              <TopImages />
          </Col>
        </Row>
      </Container>

      <Container fluid className="scrollable-content bottom-home">
        <Row className="justify-content-center align-items-center h-100 mb-5 mt-4 d-flex">
          <Col xs={12} md={8} lg={6}>
            <h1 className="tagline2 text-left">Welcome to To-Let Globe</h1>
            <h6 className="headline2 text-center">
              NO BROKERAGE ON <span className="wrap2"> PGS | FLATS | HOUSES | OFFICES </span>
            </h6>
            <div className="input-bar mb-5 mt-4 d-flex justify-content-center align-items-center" id="inputGroup">
              <InputGroup className='w-85'>
                <Form.Control
                  placeholder="Search PG, Flats and Houses"
                  aria-label="Search PG, Flats and Houses"
                />
                <Button className='btn' onClick={() => console.log("connect")}>
                  Search
                </Button>
              </InputGroup>
            </div>
            <BottomImages />
          </Col>
        </Row>
      </Container>
    </section>
  );
};