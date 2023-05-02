import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Blog(props) {
    // var settings = {
    //     dots: false,
    //     arrows: true,
    //     autoplay: false,
    //     autoplaySpeed: 1000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //           }
    //         },
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             initialSlide: 2
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //       ]
    //   };

    // 
    const [postsl, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
         .then((response) => response.json())
         .then((data) => {
            console.log("$$$_-------------", data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
        });
    })
    // 

    return (
      <>
      <div className="blog">
      <Container >
        <Row className="text-center bloghead">
        <h3>Latest Blog News</h3>
        <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat</p>
        </Row>

        <Row>
          {
            postsl.map((data) => {
                return (
                    <Col lg={4} md={6} xs={12}>
                     <Card className="text-center" >
                     <img src={"data.image"} className="blogimage" alt="" />
                       <Card.Body>
                       <Card.Title>{data.title}</Card.Title>
                    
                       <Card.Text>
                         {data.body}
                       </Card.Text>
                       </Card.Body>
                       <Button className="blogbtn">Read More</Button>
                     </Card>
                 </Col>
                )
            })

            // props.dataItems.map((data) => {
            //   return (
            //     <Col lg={4} md={6} xs={12}>
            //         <Card className="text-center" >
            //         <img src={data.image} className="blogimage" alt="" />
            //           <Card.Body>
            //           <Card.Title>{data.title}</Card.Title>
                    
            //           <Card.Text>
            //             {data.desc}
            //           </Card.Text>
            //           </Card.Body>
            //           <Button className="blogbtn">Read More</Button>
            //         </Card>
            //     </Col>
            //   )
            // })
          }
        </Row>
      </Container>
      </div>
  
      </>
    );
    
  }
  
  
  export default Blog;