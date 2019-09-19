import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';
import AddRecipeUnits from './AddRecipeUnits';

const uuid4 = require('uuid/v4');

const AddRecipeIngredientRow = (props) => {
  const uuid = uuid4();

  return (
    <React.Fragment>
      <Row className="mx-3">
        <Col xs={4} md={3} className="mt-2">
          <Form.Control className="recipe-name pl-3" input="true" placeholder="mängden" />
        </Col>
        <Col xs={3} md={3} className="units-dropdown mt-2">
          <AddRecipeUnits />
        </Col>
        <Col xs={4} md={4}>
          <Form.Control className="recipe-name pl-3 mt-2" input="true" placeholder="ingrediensen" />
        </Col>
        <Col xs={1} md={2} className="MdARemoveCircleOutline mt-2">
          <RemoveRowButton key={uuid} onClick={e => props.deleteMe(props.index)} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AddRecipeIngredientRow;
