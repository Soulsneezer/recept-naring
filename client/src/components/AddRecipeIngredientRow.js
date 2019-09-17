import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import RemoveRowButton from './AddRecipeRemoveButton';

const AddRecipeIngredientRow = (props) => {
  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col lg={2} md={3} sm={3}>
          <Form.Control input="true" className="recipe-name pl-3" placeholder="mängden" />
        </Col>
        <Col lg={2} md={2} sm={2}>
          <CategoryChoices />
        </Col>
        <Col lg={6} md={5} sm={5}>
          <Form.Control input="true" className="recipe-name pl-3" placeholder="ingrediensen" />
        </Col>
        <RemoveRowButton onClick={e => props.deleteMe(props.index)} lg={2} md={2} sm={2} className="ml-0"/>
      </Row>
    </React.Fragment>
  );
}

export default AddRecipeIngredientRow;
