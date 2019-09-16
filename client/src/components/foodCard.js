import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Row, Col } from 'react-bootstrap';


export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <div className="show-recipe">
          <Col sm={4} md={7} lg={6} xl={6}>
            <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
              <Card.Body>
                <Card.Title>Recept Namn</Card.Title>
                <Card.Text>
                  En beskrivande text till recepten.
               </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
    );
  }
}