import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeImages from "./readRecipeImages";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeNutrition from "./readRecipeNutrition";
import ReadRecipeInstructions from "./readRecipeInstructions";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import REST from "../REST";

class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className='mt-3'>
          <Col className='col-md-4'>
            <ReadRecipeImages />
          </Col>

          <Col className='col-md-8'>
            <Row>
              <Col className='md-2 xs-12 offset-10'>
                <PersonChoices />
              </Col>
              <Col className='md-10'>
                <ReadRecipeDetails />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <ReadRecipeInstructions />
        </Row>
      </Container>
    );
  }
}

export default ReadRecipe;
