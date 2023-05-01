import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/images1.webp";
import img2 from "../../images/images2.webp";
import img3 from "../../images/images3.webp";
import img4 from "../../images/images4.webp";
import img5 from "../../images/images5.webp";
import img6 from "../../images/images6.webp";
import img7 from "../../images/images7.webp";
import img8 from "../../images/images8.webp";
import img9 from "../../images/images9.webp";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/styles/index.css";

const Team = ()=>

{
    var settings = {
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    return (
      <>  
      <Container>
        <Row >
            <div className="d-flex justify-start p-5">
            <h1>most popular</h1>         
            </div>
        </Row>
        <Slider {...settings}>
            <div className="bz-card">
                <Card>
                <Card.Img  src={img1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            {  
                // props.dataItems.map((data) => {
                //   return (
                //     <Col lg={4} md={6} xs={12} className="bz-cards">
                //         <Card className="text-center " >
                //         <img src={data.image} classname="teamimg"/>
                //           <Card.Body>
                //           <Card.Title className="cardtitle">{data.title}</Card.Title>
                //           <div classname="">
                //           <i className=" icon-team icon-fb"></i>
                //           <i className="icon-team icon-twit"></i>
                //           <i className="icon-team icon-ln"></i>
                //           <i className="icon-team icon-git"></i>
                //           </div>
                //           <Card.Text>
                //             {data.desc}
                //           </Card.Text>
                //           </Card.Body>
                //         </Card>
                //     </Col>
                //   )
                // })
            }

            <div className="bz-card">
                <Card>
                <Card.Img  src={img2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img4} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img5} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img6} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img7} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img8} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>

            <div className="bz-card">
                <Card>
                <Card.Img  src={img9} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        </Slider>
      </Container>
      </>
    );
    
  }
  export default Team;
  