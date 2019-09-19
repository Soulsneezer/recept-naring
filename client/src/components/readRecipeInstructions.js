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
    return( <ListGroup>
      {this.props.steps.map((step, i)=>{
        return <ListGroupItem key={i}>{i + 1}: {step} </ListGroupItem>
      })}
    </ListGroup>
  )
  }
}

export default ReadRecipeInstructions;
