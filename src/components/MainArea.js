import React, { Component, Redirect, Link} from 'react';
import CarouselMain from './Carousel/Carousel.jsx';

import { Jumbotron,Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';



class MainArea extends Component {


    Clothing() {
        console.log("clothing btn work");
        //ready for code
        <Link to="./Pages/Clothing"></Link>

       };
  
   Toys() {
        // console.log("Toys btn work");
         //ready for code
         
       };   
       
    Home() {
        // console.log("Home btn work");
         //ready for code

       };  

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
                <CardTitle><h2>Clothes</h2></CardTitle>
                
                <h4>the best that tou can find in outfits</h4>
              
                 <Button href="/clothing">Let's Go!!</Button>
                </CardBody>
            </Card>
            </Col> 
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="https://c1-zingpopculture.eb-cdn.com.au/merchandising/images/packshots/30d596678ef242f39e6fe6cae568b068_Large.png" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Toys</h2></CardTitle>
                
                <h4>Ready to play we have he best</h4>
                <Button href="/toys">Let's Go!!</Button>
                </CardBody>
            </Card>
            </Col> 
            <Col sm="4">
            <Card>
                <CardImg top width="100%" src="http://decoholic.org/wp-content/uploads/2017/08/2017-fall-home-decor-trends-1.jpg" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Home</h2></CardTitle>
                

                <h4>Moder or Classic make your place home</h4>
                
                <Button href="/remo">Let's Go!!</Button>
             
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
