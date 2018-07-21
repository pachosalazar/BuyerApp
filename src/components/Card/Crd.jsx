import React, { Component } from 'react';

import { Card,CardImg,CardBody, CardTitle,CardSubtitle,CardText,Button,Col} from 'reactstrap';
import './Card.css'
export default class extends Component {
render() {
    return (
      // <div>


        <Col sm="4">
         <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subTitle}</CardSubtitle>
          <CardText>{this.props.cardText}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </Col>
                
     
      
      
  
    
     

    );
  }
}


