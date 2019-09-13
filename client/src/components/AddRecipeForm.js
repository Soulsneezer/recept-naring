import React from 'react';
import { Form, Col, Row, ListGroup } from 'react-bootstrap';
import CategoryChoices from './CategoryChoices';
import { MdQueryBuilder } from 'react-icons/md';
class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={3}>
            <div>ladda upp en bild här</div>
          </Col>
          <Col lg={9}>
            <Form>

              <Row className="mb-3">
                <Col lg={6} md={8} sm={10} className="mb-3">
                  <Form.Control className="recipe-name" placeholder="Vad heter ditt recept?" />
                </Col>
                <Col className="mb-3" lg={6} md={8} sm={10}>
                  <CategoryChoices />
                  <CategoryChoices />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={5} className="pl-3">
                  <Form.Control className="recipe-name p-0" placeholder="Tillagningstiden i minuter..." />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={2}>
                  <Form.Control className="recipe-name" placeholder="mängden" />
                </Col>
                <Col lg={2}>
                  <CategoryChoices />
                </Col>
                <Col lg={7}>
                  <Form.Control className="recipe-name" placeholder="ingrediensen" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={2}>
                  <Form.Control className="recipe-name" placeholder="mängden" />
                </Col>
                <Col lg={2}>
                  <CategoryChoices />
                </Col>
                <Col lg={7}>
                  <Form.Control className="recipe-name" placeholder="ingrediensen" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={2}>
                  <Form.Control className="recipe-name" placeholder="mängden" />
                </Col>
                <Col md={2}>
                  <CategoryChoices />
                </Col>
                <Col md={7}>
                  <Form.Control className="recipe-name" placeholder="ingrediensen" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={11}>
                  <ListGroup as="ol">
                    <ListGroup.Item as="li" className="recipe-name">Steg för steg...</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AddRecipeForm; 