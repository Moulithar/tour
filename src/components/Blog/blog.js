import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Blog(props) {
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
            props.dataItems.map((data) => {
              return (
                <Col lg={4} md={6} xs={12}>
                    <Card className="text-center" >
                    <img src={data.image} className="blogimage" alt="" />
                      <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                    
                      <Card.Text>
                        {data.desc}
                      </Card.Text>
                      </Card.Body>
                      <Button className="blogbtn">Read More</Button>
                    </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      </div>
  
      </>
    );
    
  }
  
  
  export default Blog;