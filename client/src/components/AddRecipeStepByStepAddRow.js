import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

const AddRecipeStepByStepRowButton = (props) => {
  return (
    <Row className="mb-3" onClick={props.onClick}>
      <Col lg={{ offset: 10 }}>
        <MdAddCircleOutline className="add-button"/>
      </Col>
    </Row>
  );

}

export default AddRecipeStepByStepRowButton;