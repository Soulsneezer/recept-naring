import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}

class ReadRecipeIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recipe = {};
  }

  render() {
    return (
      <ListGroup>
        <ListGroup.Item>{this.props.steps}</ListGroup.Item>
      </ListGroup>
    );
  }
}

export default ReadRecipeIngredients;
