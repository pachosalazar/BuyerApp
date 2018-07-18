import React, { Component } from 'react';
import NavMain from '../NavMain';
// import { DB_Config } from './components/DB';
import '../../App.css';
import MainArea from '../MainArea';
import Footer from "../Footer"
// import fire from './fire';
// import {BrowserRouter as Router,Link,Route, Switch } from 'react-router-dom';

import { Button,Container, Row, Col } from 'reactstrap';





class Home extends Component {




render() {
    return (
      <div>
              
      <Container> 
         <MainArea/>
      </Container>
      
      
  
    
      </div>

    );
  }
}

export default Home;
