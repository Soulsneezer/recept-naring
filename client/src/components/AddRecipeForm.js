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
        <Row>
          <Col>
            bild här
          </Col>
          <Col>
            <Form.Control placeholder="vad heter ditt recept?" />
          </Col>
          <Col>
            <CategoryChoices />
          </Col>
          <Col>
            <CategoryChoices />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="mängden" />
          </Col>
          <Col>
            <Button className="logInButton" variant="outline-secondary">ml</Button>
          </Col>
          <Col>
            <Form.Control placeholder="ingrediensen" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="mängden" />
          </Col>
          <Col>
            <Button className="logInButton" variant="outline-secondary">ml</Button>
          </Col>
          <Col>
            <Form.Control placeholder="ingrediensen" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="mängden" />
          </Col>
          <Col>
            <Button className="logInButton" variant="outline-secondary">ml</Button>
          </Col>
          <Col>
            <Form.Control placeholder="ingrediensen" />
          </Col>
        </Row>
        <Row>
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Steg for steg</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Form>
    )
  }
}

export default AddRecipeForm; 