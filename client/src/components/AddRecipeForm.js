import React from 'react';
import { Container, Form, Col, Row } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import FileUpload from './FileUpload';
import AddRecipeIngredientRow from './AddRecipeIngredientRow';
import AddRecipeRowButton from './AddRecipeRowButton';
import AddRecipeStepByStep from './AddRecipeStepByStep';
import AddRecipeStepByStepAddRow from './AddRecipeStepByStepAddRow';
import { MdQueryBuilder } from "react-icons/md";
class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)

    // Create three rows initially
    let ingredientRows = [];
    for (let i = 0; i < 3; i++) {
      ingredientRows.push(<AddRecipeIngredientRow key={i} index={i} deleteMe={e => this.deleteRecipeRow(e)} />)
    }
    this.state = {
      ingredientRows: ingredientRows,
      numberOfStepByStepRow: 1
    };
  }

  addRecipeRow() {
    let i = this.state.ingredientRows.length
    this.setState({
      ingredientRows: [
        ...this.state.ingredientRows,
        <AddRecipeIngredientRow key={i} index={i} deleteMe={e => this.deleteRecipeRow(e)} />
      ]
    });
  }

  deleteRecipeRow(key) {
    /*console.log(index)
    console.log('k',this.state.ingredientRows.length, index, typeof index )
    let modified = this.state.ingredientRows.slice().splice(index, 1);
    console.log('l',modified.length)
    */

    this.setState({ ingredientRows: this.state.ingredientRows.filter((item, i) => i !== key) });
    //this.setState({ numberOfIngredientsRow: this.state.numberOfIngredientsRow - i });
  }

  addStepByStepRow() {
    this.setState({ numberOfStepByStepRow: this.state.numberOfStepByStepRow + 1 });
  }

  deleteStepByStepRow() {
    this.setState({ numberOfStepByStepRow: this.state.numberOfStepByStepRow - 1 });
  }

  render() {

    // make an empty array that  has as many empty elements as numberofinngredientrow

    let stepByStepRows = [];
    for (let j = 1; j <= this.state.numberOfStepByStepRow; j++) {
      stepByStepRows.push(<AddRecipeStepByStep key={j} />)
    }

    return (
      <Container className="add-recipe m-3" style={{ width: 'auto' }} >
        <Row>
          <Col lg={3} md={12} sm={12}>
            <FileUpload />
          </Col>
          <Col lg={9} md={12} sm={12}>
            <Form>
              <Row className="recipe-name-input">
                <Col lg={4}  md={12} sm={12} className="m-3 pl-3">
                  <Form.Control input="true" className="recipe-name" placeholder="Vad heter ditt recept?" />
                </Col>
                <Col className="my-3" lg={4} md={12} sm={6}>
                  <CategoryChoices />
                </Col>
                <Col className="my-3" lg={4} md={12} sm={6}>
                  <CategoryChoices />
                </Col>
              </Row>

              <Row className="cooking-time-row my-3">

                <Col lg={9} md={12} sm={12} className="pl-1">
                  <MdQueryBuilder />
                  <Form.Control input="true" className="recipe-name pl-3" placeholder="Tillagningstiden i minuter..." />
                </Col>
              </Row>
              {this.state.ingredientRows}
              <AddRecipeRowButton onClick={e => this.addRecipeRow()} />
              {stepByStepRows}
              <AddRecipeStepByStepAddRow onClick={e => this.addStepByStepRow()} />
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddRecipeForm; 