import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          backdrop: true
        };
    
        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
      changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
          value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
      }
    
      render() {
        return (
          <div>
          <Button color="danger" onClick={this.toggle}>Sign in</Button>
            <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
              {/* <Input type="email" class="inputtext" name="email" id="email" tabindex="1" data-testid="royal_email">
              <Input type="password" class="inputtext" name="pass" id="pass" tabindex="2" data-testid="royal_pass"> */}

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }
    