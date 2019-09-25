import React, { Component } from 'react';
import { FormControl, InputGroup, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

const uuid4 = require('uuid/v4');

class AddRecipeStepByStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
      instructions: []
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  };

  handleInputChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  handleSubmit = () => {
    this.setState({
      instructions: [...this.state.instructions, { id: uuid4(), text: this.state.textInput }],
      textInput: ''
    });
  };

  onDelete(id) {
    this.setState({
      instructions: this.state.instructions.filter((item, i) => item.id !== id)
    });
  };



  render() {
    const id = uuid4();

    return (
      <React.Fragment>
        <Row className="mt-3">
          <Col className="recipe-name mt-2" xs={12} md={12} lg={12}>
            <InputGroup className="mb-3 mt-2">
              <FormControl
                className="add-instructions-input"
                type="text"
                value={this.state.textInput}
                onChange={this.handleInputChange}
                id={this.id}
                onSubmit={this.handleSubmit}
                placeholder="Skriv instruktionerna här.."
                aria-labelledby="Skriv instruktionerna här.."
                display="inline"
                onKeyDown={this.handleKeyPress}
              />
              <InputGroup.Append>
                <Button
                  className="add-instruction"
                  variant="outline-success"
                  aria-label="en knapp för att lägga till en instruktion"
                  onClick={() => this.handleSubmit()}>OK
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2" xs={12} md={12} lg={12}>
            <ListGroup aria-label="en lista för instruktionerna">
              {this.state.instructions.map((item, i) => (
                <ListGroupItem
                  style={{ display: "flex" }}
                  id="recipe-instruction"
                  remove={id}
                  key={item.id}>{i + 1}. {item.text}
                  {<Button
                    style={{ marginLeft: "auto" }}
                    className="delete-instruction"
                    value={this.item}
                    variant="outline-danger"
                    aria-label="en knapp för att radera en instruktion"
                    onClick={() => this.onDelete(item.id)}>Delete
                  </Button>}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}


export default AddRecipeStepByStep;
