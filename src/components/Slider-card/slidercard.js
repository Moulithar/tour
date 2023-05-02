import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Col, Row, Container} from "react-bootstrap";
import "./assets/styles/index.css";
import img1 from "../../images/images1.webp";
import img2 from "../../images/images2.webp";
import img3 from "../../images/images3.webp";
import img4 from "../../images/images4.webp";
import img5 from "../../images/images5.webp";
import img6 from "../../images/images6.webp";

const Slidercard = (props)=>{

     var settings = {
         dots: true,
         arrows: false,
         autoplay: false,
         autoplaySpeed: 1000,
         slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
   

   
    const[slide,setslide]= useState([]);

    useEffect (() =>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
        .then ((response) => response.json())
        .then((data)=> {
           setslide(data);
        })
        .catch((err)=>
        {
            console.log(err.message);
        });
    })



 

    return(
        <>
        <Container>
            <Row className="slider-card">
                <Col>
                    <Slider {...settings} className="popular-slider">                    
                        {
                            slide.map((data) => {
                                console.log("$$$$$", data.title)
                                return (
                                    <div>
                                    <Card className="text-center">
                                    <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    
                                    <Card.Text>
                                        {data.body}
                                    </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </div>
                                )
                            })                       
                        }
                    </Slider>                  
                </Col>
            </Row>
        </Container>
                
                       {/* {  props.slideItems.map((x) => {
                            slide.map(data) =>{
                            return (
                            <div>
                                <Card className="text-center">
                                <img src={x.image} className="" alt="" />
                                <Card.Body>
                                <Card.Title>{x.title}</Card.Title>
                                
                                <Card.Text>
                                    {x.body}
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                            )
                        }) */}
                    
                  

        </>
    );
}

export default Slidercard