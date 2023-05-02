import React, { useEffect } from "react";
import {Container, Row, Col,Button,Nav,Navbar,Dropdown} from 'react-bootstrap';
import { Link } from "gatsby"
import $ from 'jquery';
import logo from "../../images/logo.webp";
import "./assets/styles/bunzo-slider.css";

const Bunzoslider = () => {

    useEffect(() => {
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
             //>=, not <=
            if (scroll >= 100) {
                //clearHeader, not clearheader - caps H
                $(".bunzo-slider").addClass("scrollheader");
            } else {
                $(".bunzo-slider").removeClass("scrollheader");
            }
        });

        $(".btn-sec").hover(function(){
            $(".btn-sec").toggleClass("btn-sec-active")

        })

    })

    return(
        <>
        <section className="bunzo-slider">
            <Container fluid>
                <Row>
                <div className="bz-navbar">
                    {/*  */}
      
                        {/* <Navbar expand="lg" >
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src={logo} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#home">Home
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                    </ul>
                                </Nav.Link>
                                <Nav.Link href="#link">
                                    Link
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                        <li>
                                            <Link to="">test</Link>
                                        </li>
                                        <li>
                                            <Link to="">test2</Link>
                                        </li>
                                    </ul>
                                </Nav.Link>
                               
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                               
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar> */}

                    {/*  */}
            <Navbar expand="lg" >           
                <Container>
                <Navbar.Brand  href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mx-auto">
                    <div className="nav-items">
                        <ul className="list-unstyled d-flex justify-content-center align-items-center gap-5">                     
                            <li className="">
                                <a className=" d-flex gap-2" href="" >home<i className="bi bi-caret-down-fill"></i></a>
                            </li>
                            <li className="">
                                <a className="" href="" >about</a>
                            </li>
                            <li className="">
                                <a className="" href="" >category</a>
                            </li>
                            <li className="">
                                <a className=" d-flex gap-2" href="" >pages<i className="bi bi-caret-down-fill"></i></a>
                            </li>
                            <li className="">
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
                {/* <Dropdown>
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
                </Dropdown>  */}

                <Nav className="ms-auto">
                    <div className="nav-items">
                        <ul className="list-inline d-flex justify-content-center align-items-center gap-2">
                        <li className="list-inline-items">
                                <a className="" href="#!" >
                                <Button className="btn-sec"><i className="bi bi-question"></i></Button>{' '}
                                </a>
                            </li>
                            <li className="list-inline-items">
                                <a className="" href="#!" >
                                <Button className="btn-sec"><i className="bi bi-gear"></i></Button>{' '}
                                </a>
                            </li>
                        </ul>
                    </div>
                </Nav>
                {/* <div className="ms-auto d-xl-none d-lg-none">
                    <a href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="icon icon-burger-dark"></i></a>
                  </div> */}
                    
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
              
                {/* <div className="offcanvas offcanvas-end offcanvas-sports" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
            <img src="./assets/images/logo.svg" className="logo" />
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="list-unstyled offcanvas-sports-menu-list">
                <li>
                    <a href="book.html">Book Events</a>
                </li>
                <li>
                    <a href="index.html">Book Venues</a>
                </li>
                <li>
                    <a href="#!">Book Stadium Seats</a>
                </li>
            </ul>
        </div>
    </div> */}
              
            </Container>
        </section>
        </>
    );
}

export default Bunzoslider;
