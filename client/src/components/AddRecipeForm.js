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
      const uuid = uuid4();
      ingredientRows.push(<AddRecipeIngredientRow key={uuid} index={uuid} deleteMe={() => this.deleteRecipeRow(i)} />)
    }
    this.state = {
      ingredientRows: ingredientRows,
      numberOfStepByStepRow: 1
    };
  }

  addRecipeRow() {
    let key = this.state.ingredientRows.length;
    const uuid = uuid4();
    this.setState({
      ingredientRows: [
        ...this.state.ingredientRows,
        <AddRecipeIngredientRow key={uuid} index={uuid} deleteMe={() => this.deleteRecipeRow(key)} />
      ]
    });
  }


  deleteRecipeRow(key) {
    /*console.log(index)
    console.log('k',this.state.ingredientRows.length, index, typeof index )
    let modified = this.state.ingredientRows.slice().splice(index, 1);
    console.log('l',modified.length)*/
    const remainder = this.state.ingredientRows.filter((item, i) => i !== key)
    console.log('key', key);

    this.setState({ ingredientRows: remainder });
    //this.setState({ numberOfIngredientsRow: this.state.numberOfIngredientsRow - i });
  }

  addStepByStepRow() {
    this.setState({ numberOfStepByStepRow: this.state.numberOfStepByStepRow + 1 });
  }

  deleteStepByStepRow(key) {
    const remainder = this.state.numberOfStepByStepRow.filter((item, i) => i !== key)
    console.log('key', key);

    this.setState({ numberOfStepByStepRow: remainder });
  }

  render() {

    // make an empty array that  has as many empty elements as numberofinngredientrow
    let stepByStepRows = [];
    for (let j = 1; j <= this.state.numberOfStepByStepRow; j++) {
      stepByStepRows.push(<AddRecipeStepByStep key={j} />)
    }


    return (
      <React.Fragment className="add-recipe my-3" style={{ width: 'auto' }} >
        <Row>
          <Col xs={12} md={12} lg={4}>
            <FileUpload />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <Form className="form">
              <Row className="mx-3">
                <Col className="recipe-name mt-3 pl-2" xs={12} md={4} lg={4}>
                  <Form.Control input="true" className="recipe-name" placeholder="Vad heter ditt recept?" />
                </Col>
                <Col className="mt-3 px-0" xs={6} md={4} lg={4}>
                  <CategoryChoices />
                </Col>
                <Col className="mt-3 px-0" xs={6} md={4} lg={4}>
                  <CategoryChoices />
                </Col>
              </Row>

              <Row className="cooking-time-row mx-3">
                <Col xs={2} md={2} className="mt-3 px-0">
                  <MdQueryBuilder />
                </Col>
                <Col xs={9} md={9} className="mt-3 px-0">
                  <Form.Control input="true" className="recipe-name" placeholder="Tillagningstiden i minuter..." />
                </Col>
              </Row>

              {this.state.ingredientRows}
              <AddRecipeRowButton className="MdAddCircleOutline" onClick={() => this.addRecipeRow()} />

              {stepByStepRows}
              <AddRecipeStepByStepAddRow className="MdAddCircleOutline" onClick={() => this.addStepByStepRow()} />
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AddRecipeForm; 