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
    <section className={isScrolled ? 'home scrolled' : 'home'} id='home'>
      <Container className='top-home'> 
            <h1 className='tagline'>Welcome to To-Let Globe</h1>
            <h6>{`NO BROKERAGE ON`}<span className='wrap'> PGS | FLATS | HOUSES | OFFICES </span></h6>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className='image-container-1'>
                <img src={headerImg} alt="Header Img" className="img-1"/>
                {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                </div> */}
              </div>}
            </TrackVisibility>
      </Container>
      <Container className='bottom-home'>
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
        </Row>
      </Container>
      
    </section>
  )
}
