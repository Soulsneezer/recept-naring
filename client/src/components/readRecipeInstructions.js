import React, { Component } from "react";
import {ListGroupItem, ListGroup } from "react-bootstrap";

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
