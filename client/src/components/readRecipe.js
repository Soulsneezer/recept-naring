import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeImages from "./readRecipeImages";
import ReadRecipeDetails from "./readRecipeDetails";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Row className='m-4'>
          <Col className='col-md-4'>
            <ReadRecipeImages />
          </Col>
          <Col className='col-md-4 auto'>
            <ReadRecipeDetails />
          </Col>
          <Col className='col-md-4 xs lg-2'>
            <PersonChoices />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipe;
