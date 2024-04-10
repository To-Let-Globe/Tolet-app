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
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
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
        setButtonText("Send");
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
            <h1>Contact US</h1>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col size={12} md={5} className="contact-us">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                                    <h3 style={{ marginBottom: '30px' }}><span className='highlight'>Contact Us</span>, We're Ready to Help!</h3>
                                    <p>We strive to provide you with the best experience and the best platform to find your choice.</p>
                                    <p>Post us any queries and we’ll get back to you.</p>

                                    <Row className="mb-4">
                                        <Col md={2}>
                                            <img src={messageIMG} alt="Header Img" className='message-img' />
                                        </Col>
                                        <Col>
                                            <h6><span className='highlight'>Chat with us !!</span></h6>
                                            <p>Our friendly team is here to help</p>
                                            <span>to_let@gmail.com</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            <img src={callIMG} alt="Header Img" className='message-img' />
                                        </Col>
                                        <Col>
                                            <h6> <span className='highlight'>Call us...</span> </h6>
                                            <p>Mon - fri 8 am to 10 pm</p>
                                            <span>+91 9876543210</span>
                                        </Col>
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={5} className='form-container'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
                                    <h2 style={{ marginTop: '1rem' }}>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12}>
                                                <input type="text" value={formDetails.Topic} placeholder="Topic" onChange={(e) => onFormUpdate('Topic', e.target.value)} className="form-control mb-3" />
                                                <input type="text" value={formDetails.Name} placeholder="First Name" onChange={(e) => onFormUpdate('Name', e.target.value)} className="form-control mb-3" />
                                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="form-control mb-3" />
                                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className="form-control mb-3"></textarea>
                                                <button type="submit" className="btn btn-primary"><span>{buttonText}</span></button>
                                                {status.message && <p className={status.success === false ? "text-danger" : "text-success"}>{status.message}</p>}
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
