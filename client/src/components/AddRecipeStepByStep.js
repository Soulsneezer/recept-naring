import React, { Component } from 'react';
// import { MdRemoveCircleOutline } from "react-icons/md";
import { ListGroup, Row, Col } from 'react-bootstrap';

import RemoveRowButton from './AddRecipeRemoveButton';

const AddRecipeStepByStep = () => {
  return (
    <Row className="mb-3">
      <Col className="recipe-name" lg={7} md={10} sm={10}>
        <ListGroup as="ol">
          <ListGroup.Item as="li" className="list-group-item" input="true">Steg för steg...</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <RemoveRowButton lg={2} md={2} sm={2} className="remove-row-button" />
      </Col>
    </Row>
  );
}

export default AddRecipeStepByStep;
