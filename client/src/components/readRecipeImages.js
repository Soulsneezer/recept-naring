import React, { Component } from "react";
import test from "../images/ReadRecipeImages/test.jpg";
import { Col, Row, Image } from "react-bootstrap";

class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["url(../images/ReadRecipeImages/test.jpg)", "image2"]
    };
  }
  render() {
    return (
      <Row>
        <Col xs={6} md={4}>
          <Image src={test} rounded />
        </Col>
      </Row>
    );
  }
}

export default ReadRecipe;
