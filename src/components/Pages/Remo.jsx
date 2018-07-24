import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import fire from "../../fire";
import Crd from '../Card/Crd'

export default class Remo extends React.Component {
  state = {
    home: []
  }
  componentDidMount() {
    let homeRef = fire.database().ref('home');
    homeRef.once('value')
      .then(snapshot => {
         
    

      this.setState({ 'home': Object.values(snapshot.val()) });
      console.log(this.state);
  
      })
  }

  render() {
    return (
      <div>
        <Container>
       
    {this.state.home.map((item, index) =>  
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