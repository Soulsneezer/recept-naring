import React, { Component } from "react";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

export default class PersonChoices extends React.Component {
  render() {
    let choices = [];
    for (let i = 1; i <= 10; i++) {
      choices.push(i);
    }
    return (
      <Container className='PersonChoices'>
        <Row>
          <Col></Col>
          <Col md='auto'></Col>
          <Col xs lg='2'>
            <DropdownButton
              variant='Secondary'
              id='dropdown-item-button'
              title='Person'
            >
              {choices.map(i => (
                <Dropdown.Item key={i} as='button'>
                  {i}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Someone else: <PersonChoices btnColor="blue"></PersonChoices>
// I can read it from this.props.btnColor
