import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}

class ReadRecipeInstructions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recipe = {};
    this.getRecipe();
  }
  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: "5d80ae6cbfb4181b341ebdf3"})`
    );
    console.log("this.recipe Instructionssssssssssss", this.recipe);
    // let recipe = await Recipe.find(this.props._id);
    this.setState({ state: this.state });
    this.render();

    console.log("this.recipe Instructionssssssssssss", this.recipe);
  }

  render() {
    return (
      <React.Fragment>
        <ol>
          <li>{this.recipe.step}</li>
        </ol>
      </React.Fragment>
    );
  }
}

export default ReadRecipeInstructions;
