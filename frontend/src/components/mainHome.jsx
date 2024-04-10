import '../style/mhome.css';
// import {useState, useEffect} from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Container } from 'react-bootstrap';

export const Mainhome = () => {

  return (
    <section className='home' id='home'>
      <Container>

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
    </section>
  )
}
