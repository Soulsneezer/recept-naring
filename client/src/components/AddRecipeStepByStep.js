import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';

const AddRecipeStepByStep = () => {
  return (
    <React.Fragment>
      <Row className="mt-3">
        <Col className="recipe-name my-2" xs={10} md={10} lg={10}>
          <ListGroup as="ol">
            <ListGroup.Item as="li" className="list-group-item" input="text">Instruktioner..</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={2} md={2} lg={2} className="MdRemoveCircleOutline mt-2">
          <RemoveRowButton />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AddRecipeStepByStep;
