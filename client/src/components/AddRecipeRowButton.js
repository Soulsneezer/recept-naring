import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

const AddRecipeRowButton = (props) => {
  return (
    <Row className="add-button mb-3" onClick={props.onClick}>
      <Col md={{ offset: 10 }} >
        <MdAddCircleOutline />
      </Col>
    </Row>
  );
}

export default AddRecipeRowButton;