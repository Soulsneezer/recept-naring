import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeImages from "./readRecipeImages";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeNutrition from "./readRecipeNutrition";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import REST from "../REST";

class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Row className='m-3'>
          <Col className='col-md-4'>
            <ReadRecipeImages />
          </Col>
          <Col className='col-md-5 auto'>
            <ReadRecipeDetails />
          </Col>
          <Col className='col-md-3 xs lg-2'>
            <PersonChoices />
          </Col>
        </Row>
        <Row className='m-3'>
          <Col className='offset-2'>Näring per portion</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipe;
