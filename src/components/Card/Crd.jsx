import React, { Component } from 'react';

import { Card,CardImg,CardBody, CardTitle,CardSubtitle,CardText,Button,Col} from 'reactstrap';
import Btn from '../Btn/Btn.jsx'
import './Card.css'
var btnTitle = "Add to cart"
export default class extends Component {

  

  render() {
    return (
      // <div>


        <Col sm={4}  >
         <Card>
        <CardImg top width="100%" src={this.props.image} alt="Card image cap"  />
        <CardBody>
          <CardTitle>{this.props.title1}</CardTitle>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.size}  {this.props.price}</CardSubtitle>
          <CardText>{this.props.cardText}</CardText>
          <Btn 
         
          Title={btnTitle}
          title={this.props.title}
          image={this.props.image}
          size={this.props.size}
          price={this.props.price}

          />
          {/* <Button>Add to cart</Button> */}
        </CardBody>
      </Card>
        </Col>
                
     
      
      
  
    
     

    );
  }
}


