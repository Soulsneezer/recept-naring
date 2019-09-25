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
        className=" col-xs-5 col-sm-5 col-md-3 col-lg-3 ml-3 mb-3"
        style={{ display: "inline-block", height: 150, width:150 }}
      >
        <Card.Text style={{height: 42.5}} className="border-styling card-styling mt-1">{name}</Card.Text>
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
