import '../style/contact.css'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import messageIMG from '../assets/img/message-img.png';
import callIMG from '../assets/img/call-img.png';

export const Contact = () => {
    const formInitialDetails = {
        Name: '',
        email: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Submit query');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Submit query");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="contact">
           
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col size={13} md={6} className="contact-us">
                        <TrackVisibility>
                            {/* {({ isVisible }) => */}
                                {/* <div className={isVisible ? "animate__animated animate__backInRight" : ""}> */}
                                    <h1 style={{ marginBottom: '30px' }}><span className='highlight'>Contact Us</span>, We're Ready to Help!</h1>
                                    <p style={{wordSpacing:'2px',letterSpacing:'2px'}}>We strive to provide you with the best</p> 
                                    <p style={{wordSpacing:'2px',letterSpacing:'2px'}}>experience and the best platform to find your</p>
                                    <p style={{wordSpacing:'2px',letterSpacing:'2px'}}> choice.</p>
                                    <p class='space'>Post us any queries and we’ll get back to you.</p>

                                    <Row className="mb-4">
                                        <Col md={2}>
                                            <img src={messageIMG} alt="Header Img" className='message-img' />
                                        </Col>
                                        <Col>
                                            <h3><span className='highlight'>Chat with us !!</span></h3>
                                            <p>Our friendly team is here to help</p>
                                            <span>to_let@gmail.com</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            <img src={callIMG} alt="Header Img" className='message-img' />
                                        </Col>
                                        <Col>
                                            <h3> <span className='highlight'>Call us...</span> </h3>
                                            <p>Mon - fri 8 am to 10 pm</p>
                                            <span>+91 9876543210</span>
                                        </Col>
                                    </Row>
                                {/* </div>} */}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={5} className='form-container'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                                 
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12}>
                                                
                                                <label for="topic">Topic</label>
                                                <input type="text" id="inputID" value={formDetails.Topic} placeholder="select a topic" onChange={(e) => onFormUpdate('Topic', e.target.value)} className="form-control mb-3" />

                                                <label for="name">Name</label>
                                                <input type="text" id="inputID" value={formDetails.Name} placeholder="johndoe" onChange={(e) => onFormUpdate('Name', e.target.value)} className="form-control mb-3" />

                                                <label for="email">Email</label>
                                                <input type="email"id="inputID" value={formDetails.email} placeholder="name@provider.com" onChange={(e) => onFormUpdate('email', e.target.value)} className="form-control mb-3" />
                                                <label for="message">Message</label>
                                                <textarea rows="6" id="message" value={formDetails.message} placeholder=" Type your Message...." onChange={(e) => onFormUpdate('message', e.target.value)} className="form-control mb-3"></textarea>
                                                <div className='text-center submit'>
                                                    <button type="submit" className="btn1 cls2"><span className='buttoncolor'>{buttonText}</span></button>
                                                    {status.message && <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>}
                                                </div>
                                                
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                     
                </Row>
            </Container>
        </section>
    )
}