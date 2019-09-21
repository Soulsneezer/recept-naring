import React, { Component } from 'react';
import { FormControl, InputGroup, Button, ListGroup, Row, Col } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';

const uuid4 = require('uuid/v4');

class AddRecipeStepByStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      textInput: event.target.value
    })
    console.log(this.textInput);
  }

  handleSubmit = event => {
    console.log(`${this.state.textInput}, this`);
    event.preventDefault()
  }

  render() {
    const id = uuid4();

    return (
      <React.Fragment>
        <Row className="mt-3">
          <Col className="recipe-name mt-2" xs={11} md={11} lg={11}>
            <FormControl
              type="text"
              value={this.state.textInput}
              onChange={this.handleInputChange}
              id="add-instructions-form"
              onSubmit={this.handleSubmit}
              placeholder="Instruktioner.."
              aria-label="Skriv instruktioner här.."
              aria-describedby="basic-ok"
            />
          </Col>
          <Col xs={1} md={1} className="MdARemoveCircleOutline mt-2">
            <RemoveRowButton key={id} onClick={() => this.props.deleteMe(this.props.remove)} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}


export default AddRecipeStepByStep;
