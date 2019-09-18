import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ReadRecipeNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
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
      <Card className='m-t-4' bg='light' style={{ width: "7rem" }}>
        <Card.Header>{this.name}</Card.Header>
        <Card.Body>
          {name !== "Fat" ? (
            <Card.Title>
              {value}
              {name !== "Kcal" ? " g" : ""}
            </Card.Title>
          ) : (
            <Card.Title>
              {Object.keys(value).map(key => (
                <div key={key}>
                  {key} {value[key]} g
                </div>
              ))}
            </Card.Title>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
