import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import FileUpload from './FileUpload';
import AddRecipeIngredientRow from './AddRecipeIngredientRow';
import AddRecipeRowButton from './AddRecipeRowButton';
import AddRecipeStepByStep from './AddRecipeStepByStep';
import { MdQueryBuilder } from "react-icons/md";

const uuid4 = require('uuid/v4');

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)

    // Create three rows initially
    let ingredientRows = [];

    for (let i = 0; i < 3; i++) {
      const id = uuid4()
      ingredientRows.push(<AddRecipeIngredientRow key={id} remove={id} index={i} deleteMe={i => this.deleteRecipeRow(i)} />)
    }


    let numberOfStepByStepRow = [];

    for (let i = 0; i < 1; i++) {
      const id = uuid4()
      numberOfStepByStepRow.push(<AddRecipeStepByStep key={id} index={i} />)
    }

    this.state = {
      ingredientRows: ingredientRows,
      numberOfStepByStepRow: numberOfStepByStepRow
    };
  }


  addRecipeRow() {
    let i = this.state.ingredientRows.length;
    const id = uuid4()
    this.setState({
      ingredientRows: [
        ...this.state.ingredientRows,
        <AddRecipeIngredientRow key={id} remove={id} index={i} deleteMe={i => this.deleteRecipeRow(i)} />
      ]
    });
  }

  deleteRecipeRow(key) {
    this.setState({
      ingredientRows: this.state.ingredientRows.filter((item, i) => item.key !== key)
    });
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs={12} md={12} lg={3} className="mt-3">
            <FileUpload />
          </Col>
          <Col xs={12} md={12} lg={8} className="mt-3">
            <Form className="form px-4" aria-label="Ett formulär för att lägga till ett recept">
              <Row>
                <Col className="mt-3 pr-0" xs={11} sm={11} md={5} lg={4}>
                  <Form.Control input="true" className="recipe-name" placeholder="Vad heter ditt recept?" aria-label="Vad heter ditt recept?" />
                </Col>
                <Col className="mt-3 pr-0 pl-2 ml-2" xs={12} sm={11} md={6} lg={6}>
                  <CategoryChoices />
                  <CategoryChoices />
                </Col>
              </Row>

              <Row className="cooking-time-row mt-3">
                <Col md={1}>
                  <MdQueryBuilder aria-label="en klocka ikon" />
                </Col>
                <Col xs={4} md={5} lg={4} className="pl-3">
                  <Form.Control input="true" className="recipe-name" placeholder="Tillagningstiden i minuter..." aria-label="Tillagningstiden i minuter" />
                </Col>
              </Row>

              {this.state.ingredientRows}
              <AddRecipeRowButton className="MdAddCircleOutline" aria-label="knapp för att lägga till en rad för ingredienser" onClick={() => this.addRecipeRow()} />

              {this.state.numberOfStepByStepRow}
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddRecipeForm; 