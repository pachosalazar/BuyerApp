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
         
        // let items = snapshot.val();
        // let newState = [];
        // for (let clothes in items) {
        //   newState.push({
        //     id: clothes,
        //     img=items[clothes].img,
        //     type=items[clothes].type,
        //     color=items[clothes].color,
        //     size=items[clothes].size,
        //     price=items[clothes].price
        //   });
        // }


      this.setState({ 'clothes': Object.values(snapshot.val()) });
      console.log(this.state);
    //  firebase.database().ref('buyer-3ad89').set(
    //    {
    //      type: 'polos',
    //      size: 'L'
    //    }
    //  )
      })
  }

  render() {
    return (
      <div>
        <Container>
       
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