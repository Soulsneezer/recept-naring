import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

const AddRecipeRowButton = (props) => {
  return (
    <Row className="add-row-button">
      <Col md={{ col: 4, offset: 10 }} className="MdAddCircleOutline my-2">
        <MdAddCircleOutline  onClick={props.onClick} />
      </Col>
    </Row>
  );
}

export default AddRecipeRowButton;