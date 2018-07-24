import React, { Component } from 'react';
import fire from "../../fire";
import { Button} from 'reactstrap';

var btnTitle="Add to card"
export default class extends Component {

  // componentDidMount() {
  
  //   pushToFb: (id, data) => {
  //   let newRef = fire.database().ref('cart');
  //   return newRef
  //     .child(id)
  //     .push(data)
  //     .then(() => newRef.once('value'))
  //     .then(snapshot => snapshot.val())
  //     .catch(error => ({
  //       errorCode: error.code,
  //       errorMessage: error.message
  //     }));
  // }

   
  // }
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
      // <div>

      // pushToFb
      
          <Button onClick={this.cartRef} >{btnTitle}
           
           
          </Button>
        
                
     
      
      
  
    
     

    );
  }
}