import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdRemoveCircleOutline } from "react-icons/md";

const RemoveRowButton = (props) => {
  return (
    <Row className="remove-button mb-3" onClick = {props.onClick}>
      <Col lg={2} md={2} sm={1}>
        <MdRemoveCircleOutline />
      </Col>
    </Row>
  );
}

export default RemoveRowButton;