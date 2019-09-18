import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}
class ReadRecipeImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <img
        className='readRecipeImg'
        src={
          window.location.origin + "/images/readRecipeImages/" + this.props.img
        }
      />
    );
  }
}

export default ReadRecipeImages;
