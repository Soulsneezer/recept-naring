import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";

class ReadRecipeNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hej()
    
  }
  hej(){
    console.log(this)
  }
  shouldComponentUpdate (nextProps) {
    console.log(nextProps)
    console.log(this.props)
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
        <Card.Text className='m-3 border-styling fat-list'>{name}</Card.Text>
        <Card.Body>
          <ul className='fat-list'>
            {name !== "Fat" ? (
              <Card.Text className='fat-list'>
                {value}
                {name !== "Kcal" ? " g" : ""}
              </Card.Text>
            ) : (
              <div>
                {Object.keys(value).map(key => (
                  <li className='m-t-3 fat-list' key={key}>
                    {key} {value[key]} g
                  </li>
                ))}
              </div>
            )}
          </ul>
        </Card.Body>
      </Card>
    );
  }
}

export default ReadRecipeNutrition;
