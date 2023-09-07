import React from 'react';
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formInitialDetails ={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }
    const [formDetails, setFormDetails]=useState(formInitialDetails);
    const [buttonText, setButtonText] =useState('Send');
    const [status, setStatus]=useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails ({
        ...formDetails,
        [category]: value
        })
    }
    const handelSubmit = async(e) =>{
        e.preventDefault();
        setButtonText("Sending ...");
        let response = await fetch('https://SanaHabil.github.io/portfolioSana/contact', {
            method:"POST",
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200) {
            setStatus({success: true, message: "Message sent successuly"});
            }else{
                setStatus({error :false, message :"Error sending the Message, Please try again later."});
                }
        };
        
    return (
            <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                <Col size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                    }
                    </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h3>Get In Touch</h3>
                        <form onSubmit={handelSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col size={12} className="px-1">
                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                            }
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

export default Contact
