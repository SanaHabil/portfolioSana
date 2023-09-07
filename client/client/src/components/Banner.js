import React from 'react';
import { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { ArrowRight } from "react-bootstrap-icons";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Full Stack Engineer","Front End Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])
    
    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }
    return (
        <div>
            <section className="banner mt-n1" id="home">
                <Container>
                    <Row className="align-items-center ">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my portfolio!</span>
                            <h2>{`Hi! I'm SaNa`}<br /><span className="wrap"> {text}</span></h2>
                            <p>Love to share my work with you!</p>
                            <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle color="white"  size={25}/></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img"  />  
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner