import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
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

  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: "5d80ae6cbfb4181b341ebdf3"})`
    );
    //console.log(this.recipe);
    // let recipe = await Recipe.find(this.props._id);
    console.log(this)

    //console.log("this.recipe deatails", this.recipe);
  }

  render() {
    return (
      <React.Fragment>
        <Row className='mt-2'>
          <h1>{this.recipe.name}</h1>
        </Row>
        <Row className='mt-2 font-styling'>
          <p>{this.recipe.startText}</p>
        </Row>
        <Row className='mt-4'>
          <h3>Tag: {this.recipe.category}</h3>
        </Row>
        <Row className='mt-4'>
          <h3> Tid: {this.recipe.time}min</h3>
        </Row>
        <Row>
          <h3 className='mt-5'>Näring per portion </h3>
          {/* <h5> Näring per portion </h5> */}
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
