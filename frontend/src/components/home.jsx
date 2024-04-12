import '../style/home.css';
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import headerImg from "../assets/img/header-img.png";
import bird1 from "../assets/image/birds/bird1.svg"
import bird2 from "../assets/image/birds/bird2.svg"
import 'animate.css';
import { Container } from 'react-bootstrap';

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
      <img src={bird1} alt="Bird1 Img" className="bird-1" />
      <img src={bird2} alt="Bird2 Img" className="bird-2" />
        <h1 className="tagline">Welcome to To-Let Globe</h1>
        <h6 className="headline">
          {`NO BROKERAGE ON`}
          <span className="wrap"> PGS | FLATS | HOUSES | OFFICES </span>
        </h6>        
        <div className="image-container-1">
          <img src={headerImg} alt="Header Img" className="img-1" />
        </div>
      </Container>

      <div className="scrollable-content">

        <Container className='bottom-home'>
          <h1 className="tagline2">Welcome to To-Let Globe</h1>
          <h6 className="headline2">
            {`NO BROKERAGE ON`}
            <span className="wrap"> PGS | FLATS | HOUSES | OFFICES </span>
          </h6>
          <div className={`input-bar mb-3 mt-3 d-flex justify-content-between align-items-center ${isScrolled ? "show" : "hide"}`} id="inputGroup">
              <Form.Control
                placeholder="Search PG, Flats and Houses"
                aria-label="Search PG, Flats and Houses"
              />
              <Button onClick={() => console.log("connect")}>Search</Button>
          </div> 

            <div className="image-container-2">
              <img src={headerImg} alt="Header Img" className="img-2" />
            </div>

           
        </Container>
      </div>
    </section>
  );
};
