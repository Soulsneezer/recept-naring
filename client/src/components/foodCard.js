import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, } from 'react-bootstrap';


export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
  }

  render() {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
  }
}