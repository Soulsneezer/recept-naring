import React, { Component } from "react";
import {ListGroup } from "react-bootstrap";
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
        {this.props.ingredients.map((ing, i) => { 
          return(
        <ListGroup.Item key={i}>{ing.qty} {ing.type} {ing.name}</ListGroup.Item>
        )}
    )
    }
      </ListGroup>
    );
  }
}

export default ReadRecipeIngredients;
