import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
//import REST from "../../REST";

class ReadRecipeDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>prop.recipe.name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default ReadRecipeDetails;
