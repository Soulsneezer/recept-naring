import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap';


export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {
      imgUrl: this.props.recipe.img
    };
  }


  render() {
    return (
      <div className="show-recipe">
        <Card sm={4} md={7} lg={6} xl={6} style={{ width: 'auto' }}>
          <Card.Img variant="top" src={require('../images/' + this.state.imgUrl)} alt={'En bild på ' + this.props.recipe.name}/>
          <Card.Body>
            <Card.Title className="card-title-h5">{this.props.recipe.name}</Card.Title>
            <Card.Text>
              {this.props.recipe.startText.slice(0,30) + '...'}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}