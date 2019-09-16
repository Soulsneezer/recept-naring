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
