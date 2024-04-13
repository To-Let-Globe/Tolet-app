import '../style/home.css';
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import { Container } from 'react-bootstrap';


// ------------Home Img-------------
import home1 from "../assets/image/home/home1.svg"
import home2 from "../assets/image/home/home2.svg"
import home3 from "../assets/image/home/home3.svg"
import home4 from "../assets/image/home/home4.svg"
import home5 from "../assets/image/home/home5.svg"
import home6 from "../assets/image/home/home6.svg"

// -----------Birds Img------------
import bird1 from "../assets/image/birds/bird1.svg"
import bird2 from "../assets/image/birds/bird2.svg"


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
<<<<<<< HEAD
      <img src={bird1} alt="Bird1 Img" className="bird-1" />
      <img src={bird2} alt="Bird2 Img" className="bird-2" />
      {/* <img src={backgroundImg} alt="Background Img" className="img-2" /> */}
=======
      
>>>>>>> 5517bd049a5e2bb5e1edc5c89d6aa3adff10feee
        <h1 className="tagline">Welcome to To-Let Globe</h1>
        <h6 className="headline">
          {`NO BROKERAGE ON`}
          <span className="wrap"> PGS | FLATS | HOUSES | OFFICES </span>
        </h6>        
        <div className="image-container-1">
        <img src={home1} alt="Home Img" className="img-1" />
        <img src={home2} alt="Home Img" className="img-1" />
        <img src={home3} alt="Home Img" className="img-1" />
        <img src={home4} alt="Home Img" className="img-1" />
        <img src={home5} alt="Home Img" className="img-1" />
        <img src={home6} alt="Home Img" className="img-1" />
        </div>
      </Container>

      <div className="scrollable-content">

        <Container className='bottom-home'>
          <h1 className="tagline2">Welcome to Baanipreet</h1>
          <h1 className="tagline2">Welcome to Baanipreet</h1>
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
