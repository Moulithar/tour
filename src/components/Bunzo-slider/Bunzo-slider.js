import React from "react";
import {Container, Row, Col,Button,Nav,Navbar,Dropdown} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import logo from "../../images/logo.webp";
import "./assets/styles/bunzo-slider.css";

const Bunzoslider = () =>
{
    return(
        <>
        <section className="bunzo-slider" >
            <Container fluid>
                <Row>
                <div className="bz-navbar">
            <Navbar expand="lg" >           
                <Container>
                <Navbar.Brand  href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mx-auto">
                    <div className="nav-items">
                        <ul className="list-inline d-flex justify-content-center align-items-center gap-5">                     
                            <li className="list-inline-items ">
                                <a className=" d-flex gap-2" href="" >home<i class="bi bi-caret-down-fill"></i></a>
                            </li>
                            <li className="list-inline-items">
                                <a className="" href="" >about</a>
                            </li>
                            <li className="list-inline-items">
                                <a className="" href="" >category</a>
                            </li>
                            <li className="list-inline-items">
                                <a className=" d-flex gap-2" href="" >pages<i class="bi bi-caret-down-fill"></i></a>
                            </li>
                            <li className="list-inline-items">
                                <a className="" href="" >contact</a>
                            </li>
                        </ul>
                    </div>
                </Nav>
                {/* <Nav.Link className="navitems" href="#action2">
                    <div className="dropdown">
                    <button className="dropbtn">HOME</button>
                        <div className="dropdown-content">
                            <ul>
                                <li><a className="fromleft" href="" > women</a></li>
                                <li><a className="fromleft" href="" > clothing</a></li>
                                <li><a className="fromleft" href="" > accesories</a></li>
                                <li><a className="fromleft" href="" > women</a></li>
                                <li><a className="fromleft" href="" > women</a></li>
                                <li><a className="fromleft" href="" > clothing</a></li>
                                <li><a className="fromleft" href="" > accesories</a></li>
                                <li><a className="fromleft" href="" > women</a></li>
                            </ul>  
                        </div>
                    </div>
                </Nav.Link> */}
                <Dropdown>
                    <Dropdown.Toggle>
                        Open Menu
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                Home Page
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown> 

                <Nav className="ms-auto">
                    <div className="nav-items">
                        <ul className="list-inline d-flex justify-content-center align-items-center gap-2">
                        <li className="list-inline-items">
                                <a className="" href="" >
                                <Button className="btn-sec"><i className="bi bi-facebook"></i></Button>{' '}
                                </a>
                            </li>
                            <li className="list-inline-items">
                                <a className="" href="" >
                                <Button className="btn-sec"><i className="bi bi-facebook"></i></Button>{' '}
                                </a>
                            </li>
                        </ul>
                    </div>
                </Nav>
                    
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
              
                </Navbar.Collapse>
                </Container>                   
            </Navbar>
                </div> 
                <Row>
                <Col lg={12} >
                        <div className="slider-content ">
                            <h4>all solution in one</h4>
                            <h1>unlimited</h1>
                            <h3>advice,tutorial,resource</h3>
                            <Button className="bz-btn">video</Button>
                            <Button className="bz-btn">education</Button>
                            <Button className="bz-btn">technology</Button>
                            <Button className="bz-btn">marketing</Button>                         
                            <br />
                            <Button className="bz-btn">food</Button>
                            <Button className="bz-btn">business</Button>
                            <Button className="bz-btn">doctor</Button>    
                        </div>
                    </Col>
                </Row>
                    
                </Row>
              
                
              
            </Container>
        </section>
        </>
    );
}

export default Bunzoslider;
