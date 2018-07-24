import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import fire from "../../fire";
import Crd from '../Card/Crd'

export default class Toys extends React.Component {
  state = {
    toys: []
  }
  componentDidMount() {
    let toysRef = fire.database().ref('toys');
    toysRef.once('value')
      .then(snapshot => {
         
    

      this.setState({ 'toys': Object.values(snapshot.val()) });
      console.log(this.state);
  
      })
  }

  render() {
    return (
      <div>
        <Container>
       
    {this.state.toys.map((item, index) =>  
        <Crd 
          image={item.img}
          title1={item.type} 
          subTitle2={`Price: ${item.price}`}

          /> 
        )}

        </Container>
      </div>
    );
   
  }
}