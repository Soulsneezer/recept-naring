import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ReadRecipeNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className='m-t-4' bg='light' style={{ width: "7rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>8888</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
