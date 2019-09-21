import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import FileUpload from './FileUpload';
import AddRecipeIngredientRow from './AddRecipeIngredientRow';
import AddRecipeRowButton from './AddRecipeRowButton';
import AddRecipeStepByStep from './AddRecipeStepByStep';
import AddRecipeStepByStepAddRow from './AddRecipeStepByStepAddRow';
import { MdQueryBuilder } from "react-icons/md";

const uuid4 = require('uuid/v4');

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)

    // Create three rows initially
    let ingredientRows = [];

    for (let i = 0; i < 3; i++) {
      const id = uuid4()
      ingredientRows.push(<AddRecipeIngredientRow key={id} remove={id}  index={i} deleteMe={i => this.deleteRecipeRow(i)} />)
    }

    let numberOfStepByStepRow = [];
    for (let i = 0; i < 1; i++) {
      const id = uuid4()
      numberOfStepByStepRow.push(<AddRecipeStepByStep key={id} remove={id}  index={i} deleteMe={i => this.deleteStepByStepRow(i)} />)
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
    this.setState({ ingredientRows: this.state.ingredientRows.filter((item, i) => item.key !== key) });
    

   /*this.setState({ numberOfIngredientsRow: this.state.numberOfIngredientsRow - 1 });*/
  }
  addStepByStepRow() {
    //this.setState({ numberOfStepByStepRow: this.state.numberOfStepByStepRow + 1 });
    let i = this.state.numberOfStepByStepRow.length;
    const id = uuid4()
    this.setState({
      numberOfStepByStepRow: [
        ...this.state.numberOfStepByStepRow,
        <AddRecipeStepByStep key={id} remove={id} index={i} deleteMe={i => this.deleteStepByStepRow(i)} />
      ]
    });
  }

  deleteStepByStepRow(key) {
    this.setState({ numberOfStepByStepRow: this.state.numberOfStepByStepRow.filter((item, i) => item.key !== key) });
    console.log('key', key);
  }

  render() {

    // make an empty array that  has as many empty elements as numberofinngredientrow
    // let stepByStepRows = [];
    // for (let j = 1; j <= this.state.numberOfStepByStepRow; j++) {
    //   stepByStepRows.push(<AddRecipeStepByStep key={j} />)
    // }


    return (
      <Container>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <FileUpload />
          </Col>
          <Col xs={12} md={10} lg={9}>
            <Form className="form">
              <Row className="mt-3">
                <Col className="recipe-name mt-3" xs={11} md={11} lg={11}>
                  <Form.Control input="true" className="recipe-name pl-2" placeholder="Vad heter ditt recept?" />
                  <CategoryChoices />
                  <CategoryChoices />
                </Col>
              </Row>

              <Row className="cooking-time-row mt-3">
                <Col xs={1} md={1} className="ml-3 px-0">
                  <MdQueryBuilder />
                </Col>
                <Col xs={10} md={10} lg={10} className="px-0 ml-4">
                  <Form.Control input="true" className="recipe-name" placeholder="Tillagningstiden i minuter..." />
                </Col>
              </Row>

              {this.state.ingredientRows}
              <AddRecipeRowButton className="MdAddCircleOutline" onClick={() => this.addRecipeRow()} />

              {this.state.numberOfStepByStepRow}
              <AddRecipeStepByStepAddRow className="MdAddCircleOutline" onClick={() => this.addStepByStepRow()} />

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddRecipeForm; 