import React from 'react';
import { Form, Col, Row, Button, Table } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Form>
        
          <Col md={3}>
            bild här
          </Col>
          <Row>
          <Col md={4}>
            <Form.Control className="recipe-name" placeholder="vad heter ditt recept?" />
          </Col>
          <Col md={1}>
            <CategoryChoices />
          </Col>
          <Col md={1}>
            <CategoryChoices />
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <Form.Control className="recipe-name" placeholder="mängden" />
          </Col>
          <Col md={1}>
            <CategoryChoices />
          </Col>
          <Col>
            <Form.Control className="recipe-name" placeholder="ingrediensen" />
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <Form.Control className="recipe-name" placeholder="mängden" />
          </Col>
          <Col md={2}>
            <CategoryChoices />
          </Col>
          <Col>
            <Form.Control className="recipe-name" placeholder="ingrediensen" />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Form.Control className="recipe-name" placeholder="mängden" />
          </Col>
          <Col md={2}>
            <CategoryChoices />
          </Col>
          <Col>
            <Form.Control className="recipe-name" placeholder="ingrediensen" />
          </Col>
        </Row>
       
        <Row>
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td className="recipe-name">1.</td>
                <td className="recipe-name">Steg for steg</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Form>
    )
  }
}

export default AddRecipeForm; 