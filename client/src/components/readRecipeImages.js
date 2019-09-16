import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}
class ReadRecipeImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.recipe = {};
    this.getRecipe();
  }
  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: '5d7c8d55bc02e31a7cce67d5'})`
    );
    // let recipe = await Recipe.find(this.props._id);
    this.setState({ state: this.state });
    this.render();

    console.log("this.recipeeeeeeeeeeeeeeeee", this.recipe);
  }
  render() {
    return <img className='readRecipeImg' src='this.recipe.img' />;
  }
}

export default ReadRecipeImages;
