import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
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
      <React.Fragment left>
        <Row mt-2>
          <h2>{this.recipe.name}</h2>
        </Row>
        <Row className='mt-2 text-styling'>
          <p>{this.recipe.startText}</p>
        </Row>
        <Row className='mt-4'>
          <h4>Tag: {this.recipe.category}</h4>
        </Row>
        <Row className='mt-4'>
          <h4> Tid: {this.recipe.time}min</h4>
        </Row>
        <Row className='mt-4 text-styling'>
          <h4>Näring per portion</h4>
        </Row>
        <Row>
          {Object.keys(this.state.nutritions).map(key => (
            <ReadRecipeNutrition
              key={key}
              nutrientName={key}
              nutrientValue={this.state.nutritions[key]}
            />
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
