import React from "react";
import { Card } from "react-bootstrap";

class ReadRecipeNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let name = this.props.nutrientName;
    let value = this.props.nutrientValue;
    // a hack for fat because we can"t send an object
    // from the parent component so instead we are
    // sending a function, that when called returns an object
    if (typeof value === "function") {
      value = value();
    }

    return (
      <Card
        className="m-2 col-md-3 col-sm-4"
        style={{ display: "inline-block" }}
      >
        <Card.Text className="border-styling card-styling m-2">{name}</Card.Text>
        <Card.Body>
          <Card.Text className="card-styling">
            {value}
            {name !== "Kcal" ? " g" : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
