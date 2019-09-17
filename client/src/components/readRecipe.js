import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeImages from "./readRecipeImages";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeInstructions from "./readRecipeInstructions";
import ReadRecipeIngredients from "./readRecipeIngredients";

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
        <Row className='m-t-5 font-styling'>
          <Col className='md-3  mt-5'>
            <h3 className='m-b-2 offset-1'> Ingredienser</h3>
            <ReadRecipeIngredients />
          </Col>
          <Col className='md-9 mt-5'>
            <h3 className='m-b-2 offset-1'> Steg för steg</h3>
            <ReadRecipeInstructions />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReadRecipe;
