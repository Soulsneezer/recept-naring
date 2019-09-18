import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import RemoveRowButton from './AddRecipeRemoveButton';

const AddRecipeIngredientRow = (props) => {
  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col lg={2} md={4} sm={2}>
          <Form.Control className="recipe-name pl-3 my-2 w-25" input="true" placeholder="mängden" />
        </Col>
        <Col lg={2} md={2} sm={2}>
          <CategoryChoices />
        </Col>
        <Col lg={5} md={6} sm={7}>
          <Form.Control className="recipe-name pl-3 my-2" input="true" placeholder="ingrediensen" />
        </Col>
        <Col>
          <RemoveRowButton lg={2} md={2} sm={1} className="my-2" onClick={e => props.deleteMe(props.index)} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AddRecipeIngredientRow;
