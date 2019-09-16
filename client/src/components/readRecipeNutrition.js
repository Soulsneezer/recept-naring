import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";

class ReadRecipeNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let name = this.props.nutrientName;
    let value = this.props.nutrientValue;
    // a hack for fat because we can't send an object
    // from the parent component so instead we are
    // sending a function, that when called returns an object
    if (typeof value === "function") {
      value = value();
    }

    return (
      <Card
        className='m-1 offset-3'
        style={{ display: "inline-block", width: "9rem" }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          {name !== "Fat" ? (
            <Card.Text>
              {value}
              {name !== "Kcal" ? " g" : ""}
            </Card.Text>
          ) : (
            <Card>
              {Object.keys(value).map(key => (
                <div key={key}>
                  {key} {value[key]} g
                </div>
              ))}
            </Card>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
