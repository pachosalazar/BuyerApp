import React, { Component } from 'react';
import { Jumbotron,Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import fire from "../../fire"

    export default class Clothing extends React.Component {
        state = {
          clothes: [] 
        }
        componentDidMount() {
          let clothesRef = fire.database().ref('clothes');
          clothesRef.once('value')
            .then(snapshot => {

              console.log(Object.values(snapshot.val()));
            })

        }

        render() {
          return (
            <div>
            <Container>
              <Row>
                <Col sm="4">
                  <Card>
                      <CardImg top width="100%"  />
                      <CardBody>
                      <CardTitle>
                      
                      </CardTitle>
                
                      <Button >Buy</Button>
                      <br/>
                      <Button >Buy</Button>

                      </CardBody>
                  </Card>
                </Col> 
                <Col sm="4">
                  <Card>
                      <CardImg top width="100%"  />
                      <CardBody>
                      <CardTitle>
                      
                      </CardTitle>
                
                      <Button >Buy</Button>
                      <br/>
                      <Button >Buy</Button>

                      </CardBody>
                  </Card>
                </Col> 
                <Col sm="4">
                  <Card>
                      <CardImg top width="100%"  />
                      <CardBody>
                      <CardTitle>
                      
                      </CardTitle>
                
                      <Button >Buy</Button>
                      <br/>
                      <Button >Buy</Button>

                      </CardBody>
                  </Card>
                </Col> 
              </Row>
             </Container> 
            </div>
          );
        }
      }