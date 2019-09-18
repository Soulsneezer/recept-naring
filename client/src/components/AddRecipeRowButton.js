import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

const AddRecipeRowButton = (props) => {
  return (
    <Row className="add-row-button mb-3">
      <Col md={{ offset: 10 }} >
        <MdAddCircleOutline onClick={props.onClick} />
      </Col>
    </Row>
  );
}

export default AddRecipeRowButton;