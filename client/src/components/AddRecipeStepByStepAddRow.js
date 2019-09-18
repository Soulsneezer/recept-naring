import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

const AddRecipeStepByStepRowButton = (props) => {
  return (
    <Row className="add-row-button mb-3" >
      <Col lg={{ offset: 10 }}>
        <MdAddCircleOutline onClick={props.onClick}/>
      </Col>
    </Row>
  );
}

export default AddRecipeStepByStepRowButton;