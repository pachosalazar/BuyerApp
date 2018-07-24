import React from 'react';
import { Button,Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand id="logo "href="/" ><img src={process.env.PUBLIC_URL + '/imgs/logo.png'} style={{width:100, marginTop: 10}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="./Clothing">Clothing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./Toys">Toys</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./Remo">Remo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><span class="glyphicon glyphicon-shopping-cart"></span>Cart ({this.props.count})</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}