import React, { Component } from 'react';
import {
  Jumbotron, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Table
} from 'reactstrap';
import fire from "../../fire";
import Crd from '../Card/Crd'

export default class Cart extends React.Component {

  state = {
    cart: []
  }
  componentDidMount() {
    let cartRef = fire.database().ref('cart');
   cartRef.once('value')
      .then(snapshot => {
         
    

      this.setState({ 'cart': Object.values(snapshot.val()) });
      console.log(this.state);
  
      })
  }
   
  render() {
    return (
      <div>
        <Container>
        {this.state.cart.map((item, index) =>  
        <Table>
        <thead>
          <tr>
            
            <th>product</th>
            <th>about</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          <th>   image={item.img}</th>
            <th> size={`Size: ${item.size}`}</th>
            <th>price={`Price: ${item.price}`}</th>
          </tr>
         
        </tbody>
      </Table>
        )}

        </Container>
      </div>
    );
   
  }
}