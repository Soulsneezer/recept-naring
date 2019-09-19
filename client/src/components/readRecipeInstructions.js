import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}

class ReadRecipeInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recipe = {};
  }

  render() {
    return <p>List of ReadRecipeInstructions should show here</p>;
  }
}

export default ReadRecipeInstructions;
