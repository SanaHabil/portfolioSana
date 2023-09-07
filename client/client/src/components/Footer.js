import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/sanaLogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return (
    <div>
        <footer className="footer bg-Color-scrolled">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end ">
                        <div className="social-icon" style={{padding: 20}}>
                            <a href=""><img src={navIcon1} alt="" /></a>
                            <a href=""><img src={navIcon2} alt="" /></a>
                            <a href=""><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    </div>
    )
    }

export default Footer