import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg11 from "../assets/img/project-img1.png";
import projImg12 from "../assets/img/project-img2.png";
import projImg13 from "../assets/img/project-img3.png";

import projImg21 from "../assets/img/yola1.png";
import projImg22 from "../assets/img/yola2.png";
import projImg23 from "../assets/img/yola3.png";

import projImg31 from "../assets/img/foodsy1.png";
import projImg32 from "../assets/img/foodsy2.png";
import projImg33 from "../assets/img/foodsy3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Projects = () => {
    const projects3 = [
        {
        title: "Coffee Shop",
        description: "MERN FUll Stack",
        imgUrl: projImg11,
        },
        {
        title: "Coffee Shop",
        description: "BootStrap",
        imgUrl: projImg13,
        },
        {
        title: "Coffee Shop",
        description: "Design & Development",
        imgUrl: projImg12,
        },
    ];
    const projects1 = [
        {
        title: "Yola",
        description: "MERN FUll Stack",
        imgUrl: projImg21,
        },
        {
        title: "Yola",
        description: "Design & Development",
        imgUrl: projImg22,
        },
        {
        title: "Yola",
        description: "Talewind",
        imgUrl: projImg23,
        },
    ];
    const projects2 = [
        {
        title: "FoodSY",
        description: "Python, Flask Full Stack",
        imgUrl: projImg31,
        },
        {
        title: "FoodSY",
        description: "User Authentication",
        imgUrl: projImg33,
        },
        {
        title: "FoodSY",
        description: "Design & Development",
        imgUrl: projImg32,
        }
    ];
return ((
<section className="project" id="projects">
    <Container>
    <Row>
        <Col size={12}>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Yola</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">FoodSy</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link eventKey="third">Coffee Shop</Nav.Link>
                </Nav.Item>
                
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                    <Row>
                    {
                        projects1.map((project, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                        })
                    }
                    <Row className='text-center fs-5' >
                        <a className="link-secondary" href="https://github.com/SanaHabil/Graduation-Project/tree/main/foodsy">GitHub</a>
                    </Row>
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Row>
                    {
                        projects2.map((project, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                        })
                    }
                    </Row>
                    <Row className='text-center fs-5' >
                        <a className="link-secondary" href="https://github.com/Yola-Dojo/Yola">GitHub</a>
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <Row>
                        {
                            projects3.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                            })
                        }
                    </Row>
                    <Row className='text-center fs-5' >
                        <a className="link-secondary" href="https://github.com/SanaHabil/Coffee-Shop-Website">GitHub</a>
                    </Row>
                </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </div>}
        </TrackVisibility>
        </Col>
    </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
</section>
)
)
}

export default Projects