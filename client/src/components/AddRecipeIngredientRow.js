import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';
import AddRecipeUnits from './AddRecipeUnits';

const uuid4 = require('uuid/v4');

class AddRecipeIngredientRow extends Component {
 
  render() {
    const id = uuid4();

    return (
      <React.Fragment>
        <Row className="mt-3">
          <Col xs={5} sm={6} md={3} lg={3} className="mt-2 pr-0">
            <Form.Control className="recipe-name" input="true" aria-label="mängden" placeholder="mängden" />
          </Col>
          <Col xs={5} sm={4} md={3} lg={2} className="units-dropdown mt-2 pr-0">
            <AddRecipeUnits />
          </Col>
          <Col xs={10} sm={10} md={5} lg={6} className="mt-2">
            <Form.Control className="recipe-name" input="true" placeholder="ingrediensen" aria-label="ingrediensen" />
          </Col>
          <Col xs={1}  md={1} className="MdARemoveCircleOutline mt-2">
            <RemoveRowButton key={id} onClick={() => this.props.deleteMe(this.props.remove)} aria-label="en knapp för att radera en rad ingrediensen" />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AddRecipeIngredientRow;