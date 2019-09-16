import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.recipe = {};
    this.getRecipe();
  }
  //componentDidMount() {}

  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: '5d7f43782a775422100e0770'})`
    );
    console.log(this.recipe);
    // let recipe = await Recipe.find(this.props._id);
    this.setState({ state: this.state });
    this.render();

    console.log("this.recipe deatails", this.recipe);
  }

  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{this.recipe.name}</Card.Title>
          <Card.Text>"this.recipe.startText"</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>"this.recipe.category"</ListGroupItem>
          <ListGroupItem>"this.recipe.time"</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default ReadRecipeDetails;
