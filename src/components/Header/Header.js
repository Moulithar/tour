import React from "react";
import orange from "../../images/orange-banner.webp";
import {Container, Row, Col,Button,Nav,Navbar,Dropdown} from 'react-bootstrap';
import img1 from "../../images/images1.webp";
import "./assets/styles/header.css"

const  Header =(props)=> {
    return(
        <>
            <Container >
                <Row className="header">
                    <Col lg={6} md={12}>
                        <img src={orange} alt="" />
                    </Col>

                    <Col lg={6} md={12}>
                        <Row>
                            <Col lg={12} className="pt-3">
                                <h6 >By roderick {props.tag === "test" ? "test text" : "none"}</h6>
                                 <h2>Create beautiful designs gatsby convert more...</h2>   
                                  <p>  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                                    a piece of classical literature from 459, making it over 2000 years old…
                                   </p>
                                   <div className="d-flex gap-5 justify-content-start">
                                    <p> 2021-03-25</p>
                                    <li>10 min read</li>
                                   </div>
                            </Col>
                            <div className="border-bottom"></div>
                            <Col lg={12} className="pt-3">
                            <h6>By roderick</h6>
                                 <h2>Create beautiful designs gatsby convert more...</h2>   
                                  <p>  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                                    a piece of classical literature from 459, making it over 2000 years old…
                                   </p>
                                   <div className="d-flex gap-5 justify-content-start">
                                    <p> 2021-03-25</p>
                                    <li>10 min read{props.owl === "must" ? "heading-color" : (props.tag === "test" ? <img src={img1} /> : "") }</li>
                                    
                                   </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header