import React, { useState } from "react";
import {Container, Row, Col,Button,Nav,Navbar,NavDropdown,Form} from 'react-bootstrap';
import logo from "../../images/logo.webp";
import "./assets/styles/footer.css";

const Footer = ()=>{

    const [test, setTest] = useState("hello");

    const subscribeBtn = () => {
        setTest("active");
        console.log("test", test);
    }

    return (
        <>
        <div className="footer">
        <Container >
            <Row className="pt-5">
                <Col lg={3} xs={12} >
                    <img src={logo} alt="" className="" />
                    <p>Lorem Ipsum is simply dummy text of the industry orem Ipsum has been the industry's since the when unknown.</p>
                            <Button className="footer-btn"><i className="bi bi-facebook"></i></Button>{' '}
                            <Button className="footer-btn"><i className="bi bi-facebook"></i></Button>{' '}
                            <Button className="footer-btn"><i className="bi bi-facebook"></i></Button>{' '}
                            <Button className="footer-btn"><i className="bi bi-facebook"></i></Button>{' '}<br /><br/>
                            <Button className="btn-main">share ypur thinking<i className="bi bi-facebook"></i></Button>{' '}
                </Col>
                <Col lg={6} xs={12}>
                    <Row>
                        <Col lg={4} xs={12}>
                            <h4>Company</h4>
                            <div className="list-inline ">
                                <ul className="list-inline-item list-unstyled">
                                <a className="" href=""><li>about us</li></a> 
                                <a className="" href=""><li>contact us</li></a> 
                                <a className="" href=""><li>locla print ad</li></a> 
                                <a className="" href=""><li>FAQs</li></a> 
                                <a className="" href=""><li>carrers</li></a>                            
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <h4>quick links</h4>
                        <div className="list-inline ">
                                <ul className="list-inline-item list-unstyled">
                                <a className="" href=""><li>about us</li></a> 
                                <a className="" href=""><li>contact us</li></a> 
                                <a className="" href=""><li>locla print ad</li></a> 
                                <a className="" href=""><li>FAQs</li></a> 
                                <a className="" href=""><li>carrers</li></a>                            
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                        <h4>quick links</h4>
                        <div className="list-inline ">
                                <ul className="list-inline-item list-unstyled">
                                <a className="" href=""><li>about us</li></a> 
                                <a className="" href=""><li>contact us</li></a> 
                                <a className="" href=""><li>locla print ad</li></a> 
                                <a className="" href=""><li>FAQs</li></a> 
                                <a className="" href=""><li>carrers</li></a>                            
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} xs={6}>
                    <h4>subscribe</h4>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="email address" />
                    </Form.Group>
                    </Form>
                    <Button className={`btn-main ${test}`} onClick={subscribeBtn}>{test === "active" ? "Subscribed" : "Subscribe Now"}</Button>
                </Col>
                </Row>
            </Container>
        </div>
        </> 
    );
}

export default Footer