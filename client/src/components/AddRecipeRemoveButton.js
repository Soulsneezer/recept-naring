import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdRemoveCircleOutline } from "react-icons/md";

const RemoveRowButton = (props) => {
  return (
    <Row className="remove-row-button mb-3" >
      <Col lg={2} md={2} sm={1}>
        <MdRemoveCircleOutline onClick = {props.onClick}/>
      </Col>
    </Row>
  );
}

export default RemoveRowButton;