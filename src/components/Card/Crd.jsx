import React, { Component } from 'react';

import { Card,CardImg,CardBody, CardTitle,CardSubtitle,CardText,Button,Col} from 'reactstrap';
import './Card.css'

export default class extends Component {
render() {
    return (
      // <div>


        <Col sm={4}>
         <Card>
        <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.title1}</CardTitle>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subTitle}  {this.props.subTitle2}</CardSubtitle>
          <CardText>{this.props.cardText}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </Col>
                
     
      
      
  
    
     

    );
  }
}


