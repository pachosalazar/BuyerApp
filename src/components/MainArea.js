import React, { Component } from 'react';
import CarouselMain from './Carousel';
import { Jumbotron,Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


class MainArea extends Component {

render() {
    return (
      
          
         <Container>
           <Jumbotron>   
           <CarouselMain/>
           <br/>
            <Row>
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://1843magazine.static-economist.com/sites/default/files/201612_FT_BAL_12-WEB.jpg" alt="Card image cap" />
                <CardBody>
                <CardTitle><h1>Clothe</h1></CardTitle>
                
                <h4>the best that tou can find in outfits</h4>
                <Button>Let's Go!!</Button>
                </CardBody>
            </Card>
            </Col> 
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/30d596678ef242f39e6fe6cae568b068_Large.png" alt="Card image cap" />
                <CardBody>
                <CardTitle><h1>Toys</h1></CardTitle>
                
                <h4>Ready to play we have he best</h4>
                <Button>Let's Go!!</Button>
                </CardBody>
            </Card>
            </Col> 
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="http://decoholic.org/wp-content/uploads/2017/08/2017-fall-home-decor-trends-1.jpg" alt="Card image cap" />
                <CardBody>
                <CardTitle><h1>home</h1></CardTitle>
                
                <h4>Moder or Classic make your place home</h4>
                <Button>Let's Go!!</Button>
                </CardBody>
            </Card>
            </Col> 
            </Row>
            
           </Jumbotron>
           
           </Container>
     
    );
  }
}

export default MainArea;
