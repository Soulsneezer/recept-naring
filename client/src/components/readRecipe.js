import React, { Component } from "react";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeInstructions from "./readRecipeInstructions";
import ReadRecipeIngredients from "./readRecipeIngredients";
import { Container, Col, Row } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}
class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.loadFromUrl();
    this.recipe = "";
  }
  async loadFromUrl() {
    let data = await Recipe.find(
      `.find({_id:'${this.props.match.params.id}'})`
    );
    this.recipe = data.pop();
    console.log(this.recipe.img);
    this.setState({
      state: this.state,
      image: this.recipe.img
    });
  }

  render() {
    return (
      <Container className='text-left fluid'>
        {this.recipe ? <ReadRecipeDetails {...this.recipe} /> : null}
        <Row className='mt-3'>
          <Col className='col-sm-12 col-md-4'>
            <h4 className='mb-2'> Ingredienser</h4>
            <ReadRecipeIngredients {...this.recipe} />
          </Col>
          <Col className='col-sm-12 col-md-8'>
            <h4 className='mb-2'> Steg för steg</h4>
            <ReadRecipeInstructions {...this.recipe} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReadRecipe;
