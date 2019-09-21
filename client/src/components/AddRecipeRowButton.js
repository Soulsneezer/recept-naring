import React from 'react';
import { MdAddCircleOutline } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

const AddRecipeRowButton = (props) => {
  return (
    <Row className="add-row-button">
      <Col xs={{ col: 3, offset: 10 }} md={{ col: 3, offset: 11 }}  lg={{ col: 3, offset: 11}} className="MdAddCircleOutline mt-2">
        <MdAddCircleOutline  onClick={props.onClick} />
      </Col>
    </Row>
  );
}

export default AddRecipeRowButton;