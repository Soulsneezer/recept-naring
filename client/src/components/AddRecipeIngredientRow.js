import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';
import AddRecipeUnits from './AddRecipeUnits';
//import ingredients-icon from '../images/ingredients-icon.png';

const uuid4 = require('uuid/v4');

class AddRecipeIngredientRow extends Component {
  constructor(props){
    super(props);

  }


  render() {
    const uuid = uuid4();

    return (
      <React.Fragment>
        <Row className="mt-3">
          <Col xs={5} md={3} lg={4} className="mt-2">
            <Form.Control className="recipe-name pl-3" input="true" aria-label="amount" placeholder="mängden" />
          </Col>
          <Col xs={5} md={3} lg={3} className="units-dropdown mt-2">
            <AddRecipeUnits />
          </Col>
          <Col xs={10} md={5} lg={4}>
            <Form.Control className="recipe-name p-3 mt-2" input="true" placeholder="ingrediensen" />
          </Col>
          <Col xs={1} md={1} className="MdARemoveCircleOutline mt-2">
            <RemoveRowButton key={uuid} onClick={e => this.props.deleteMe(this.props.index)} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AddRecipeIngredientRow;
