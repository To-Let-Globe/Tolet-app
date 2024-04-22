import '../style/home.css';
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import { Container, InputGroup } from 'react-bootstrap';
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
      <Container className="top-home" >
      
        <h1 className="tagline">Welcome to To-Let Globe </h1>
        <h6 className="headline">
          NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
        </h6>        
        <div className="image-container-1">
            <TopImages/>
        </div>  
      </Container>
      
      <div className="scrollable-content">
        <Container className='bottom-home'>
            
          <h1 className="tagline2">Welcome to To-Let Globe </h1>
          <h6 className="headline2">
            {`NO BROKERAGE ON`}
            <span className="wrap2"> PGS | FLATS | HOUSES | OFFICES </span>
          </h6>
          <div className="input-bar mb-5 mt-4 d-flex justify-content-between align-items-center" id="inputGroup">
            <InputGroup className='w-100'> 
              <Form.Control
                placeholder="Search PG, Flats and Houses"
                aria-label="Search PG, Flats and Houses"
              />
              <Button className='btn' onClick={() => console.log("connect")}>
                Search
              </Button>
            </InputGroup>
          </div>
          <div className="image-container-2">
            <BottomImages/>
          </div>  
        </Container>
      </div>
    </section>
  );
};
