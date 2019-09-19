import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeInstructions from "./readRecipeInstructions";
import ReadRecipeIngredients from "./readRecipeIngredients";
import ReadRecipeNutrition from "./readRecipeNutrition";
import {
  Container,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Image
} from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}
class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.loadFromUrl();
    this.recipe = "";
    this.state = {};
  }
  async loadFromUrl() {
    let data = await Recipe.find(
      `.find({_id:'${this.props.match.params.id}'})`
    );
    this.recipe = data.pop();
    this.setState({ state: this.state });
  }

  render() {
    return (
      <Container>
        <Row className='mt-3'>
          <Col className='col-md-4'>
            <Image src={this.props.img} alt={this.recipe.name} fluid />
          </Col>

          <Col className='col-md-8'>
            <Row>
              <Col className='md-2 xs-12 offset-10'>
                <PersonChoices {...this.recipe} />
              </Col>
              <Col className='md-10'>
                {this.recipe ? <ReadRecipeDetails {...this.recipe} /> : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col className='md-3 mt-5'>
            <h3 className='mb-2 offset-1'> Ingredienser</h3>
            {this.recipe  ? <ReadRecipeIngredients ingredients={this.recipe.ingredient} /> : null}
          </Col>
          <Col className='md-9 mt-5'>
            <h3 className='mb-2 offset-1'> Steg för steg</h3>
            {this.recipe.step ? <ReadRecipeInstructions steps={this.recipe.step} /> : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReadRecipe;
