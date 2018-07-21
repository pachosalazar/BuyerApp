import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import fire from "../../fire";
import Crd from '../Card/Crd'

export default class Clothing extends React.Component {
  state = {
    clothes: []
  }
  componentDidMount() {
    let clothesRef = fire.database().ref('clothes');
    clothesRef.once('value')
      .then(snapshot => {

        // console.log(Object.values(snapshot.val()));

        // this.setState(Object.values(snapshot.val()));
      //   this.setState({ 'clothes': [...snapshot.val()] 
      // });
      // this.setState({ 'clothes': [Object.values(snapshot.val())] });
      this.setState({ 'clothes': Object.values(snapshot.val()) });
      console.log(this.state);
        // console.log('state: ', this.state);
        
      })

  }
//["0"].color
//{state["0"].color}
  render() {
    return (
      <div>
        <Container>
        {/* {this.state.map((index,c)  =>(
        <Crd 
        
         title={c.color} 
         subTitle={c.size} 
      
         /> 
        
    ))} */}
    {this.state.clothes.map((item, index) =>  
        <Crd 
          image={item.img}
          title1={item.type} 
          title={`Color: ${item.color}`}
          subTitle={`Size: ${item.size}`}
          subTitle2={`Price: ${item.price}`}

        /> 
    )}

        </Container>
      </div>
    );
  }
}