import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

const AddRecipeStepByStepRowButton = (props) => {
  return (
    <Row className="add-row-button">
      <Col md={{ col: 4, offset: 10 }}>
        <MdAddCircleOutline className="MdAddCircleOutline mt-2" onClick={props.onClick}/>
      </Col>
    </Row>
  );
}

export default AddRecipeStepByStepRowButton;