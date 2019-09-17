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
      `.findOne({_id: '5d7f46312a775422100e07c4'})`
    );
    this.setState({ state: this.state });
    this.render();

    console.log("this.recipe Image component", this.recipe.img);
  }
  render() {
    return (
      <Image
        style={{
          backgroundImage: `url(window.location.origin+/images/readRecipeImages/+${this.recipe.img})`,
          background: "no-repeat right",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    );
  }
}

export default ReadRecipeImages;
