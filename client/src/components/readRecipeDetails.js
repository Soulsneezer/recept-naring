import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);

    let fatDetails = () => {
      return {
        monounsaturated: 10,
        polyunsaturated: 15,
        unsaturated: 5
      };
    };

    this.state = {
      nutritions: {
        Kcal: 455,
        Protein: 30,
        Fat: fatDetails,
        Carbs: 40,
        Salt: 3
      }
    };
    this.recipe = {};
    this.getRecipe();
  }
  //componentDidMount() {}

  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: '5d7f46312a775422100e07c4'})`
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
          <Card.Text>{this.recipe.startText}</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Tag: {this.recipe.category}</ListGroupItem>
          <ListGroupItem>Tid: {this.recipe.time}</ListGroupItem>
        </ListGroup>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>
            {Object.keys(this.state.nutritions).map(key => (
              <ReadRecipeNutrition
                key={key}
                nutrientName={key}
                nutrientValue={this.state.nutritions[key]}
              />
            ))}
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default ReadRecipeDetails;
