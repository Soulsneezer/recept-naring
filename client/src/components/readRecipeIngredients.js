import React, { Component } from "react";
import {ListGroup } from "react-bootstrap";

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
        <ListGroup.Item key={i}>{this.props.numberOfPersons ? ing.qty / this.props.portion * this.props.numberOfPersons : ing.qty / this.props.portion  * this.props.portion} {ing.type} {ing.name}</ListGroup.Item>
        )}
    )
    }
      </ListGroup>
    );
  }
}
export default ReadRecipeIngredients;
