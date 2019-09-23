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
    // a hack for fat because we can't send an object
    // from the parent component so instead we are
    // sending a function, that when called returns an object
    if (typeof value === "function") {
      value = value();
    }

    return (
      <Card
        className='m-1 col-md-2 col-sm-2'
        style={{ display: "inline-block" }}
      >
        <Card.Text className='border-styling fat-list'>{name}</Card.Text>
        <Card.Body>
          <ul className='fat-list'>
            {name !== "Fat" ? (
              <Card.Text className='fat-list'>
                {value}
                {name !== "Kcal" ? " g" : ""}
              </Card.Text>
            ) : (
              <Card.Text className='fat-list'>
                {Object.keys(value).map(key => (
                  <li className='test' key={key}>
                    {key} {value[key]} g
                  </li>
                ))}
              </Card.Text>
            )}
          </ul>
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
