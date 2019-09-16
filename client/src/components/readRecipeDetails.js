import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);

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
    this.getRecipe();
  }
  //componentDidMount() {}

   getRecipe() {
    // let recipe = await Recipe.find(this.props._id);
    console.log(this)

  }

  render() {
    if (this.props.category === null) return null;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.startText}</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Tag: {this.props.category.join(", ")}</ListGroupItem>
          <ListGroupItem>Tid: {this.props.time}</ListGroupItem>
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
