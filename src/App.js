import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { DB_Config } from './components/DB';
import Home from "./components/Pages/Home";
import Clothing from "./components/Pages/Clothing"
// import fire from './fire';
import NavMain from "./components/NavMain"
import Footer from "./components/Footer"
import { Button,Container, Row, Col } from 'reactstrap';





class App extends Component {



render() {
    return (
    <Router>
      <div>
      <NavMain/> 
        
          <Route exact path="/" component={Home} />   
          <Route exact path="/Clothing" component={Clothing} /> 
        
      <Footer />
      </div>
    </Router>               
    );
  }
}

export default App;
