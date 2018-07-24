import React, { Component } from 'react';
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
// import { DB_Config } from './components/DB';
import Home from "./components/Pages/Home";
import Clothing from "./components/Pages/Clothing"
import Toys from "./components/Pages/Toys"
import fire from "./fire"
import Remo from "./components/Pages/Remo"
// import fire from './fire';
import NavMain from "./components/NavMain"
import Footer from "./components/Footer"
import { Button,Container, Row, Col } from 'reactstrap';
import Cart from './components/Pages/Cart';





class App extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }



  componentDidMount() {
    
    let cartRef = fire.database().ref('cart');
    cartRef.once('value')
      .then(snapshot => {
         
    

      this.setState(Object.values(snapshot.val()) );
      console.log('cart object: ',this.state);
      // console.log(Object.keys(this.state).length)
  
      })
  }




render() {
    return (
    <Switch>
      <div>
        
      <NavMain count={Object.keys(this.state).length}/> 
      {/* {this.state.__proto__.constructor.length} */}
      {/* cart={Object.size(this.state)} */}
      {/* .__proto__.constructor.length */}
      {/* switch? */}
          <Route exact path="/" component={Home} />   
          <Route exact path="/Clothing" component={Clothing} /> 
          <Route exact path="/Toys" component={Toys} /> 
          <Route exact path="/Remo" component={Remo} /> 
          <Route exact path="/Cart"  component={Cart}/> 
      <Footer />
      </div>
      {/* end switch? */}
    </Switch>              
    );
  }
}

export default App;
