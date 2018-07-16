import React, { Component } from 'react';
import Nav from './components/Nav';
import { DB_Config } from './components/DB';
import CarouselMain from './components/Carousel';
import './App.css';
import MainArea from './components/MainArea';

import { Button,Container, Row, Col } from 'reactstrap';



class App extends Component {

componentWillMount(){
  this.ItemRef = base.syncState('Item',{
    context: this,
    state: 'Item'
  });
}
componentWillUnmount(){
  base.removeBinding(this.ItemRef);
}


render() {
    return (
      <div className="App">
          <Nav/>
          
       <Container>
         
          <MainArea/>
          
        
      
      </Container>

      <footer>
        <div className="container">
            &copy;Copyright 2018 Jaime F Salazar
        </div>
    </footer>
    
      </div>

    );
  }
}

export default App;
