import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Row, Col, Button } from 'react-bootstrap';


export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.hej()
    this.state = {};
  }
  hej(){
    // console.log(this)
  }

  render() {
    return (
      <Row className="flex">
        <Col sm={4} md={7} lg={6} xl={6}>
          <div className="card-outer special"> 
                  <div className="card-inner">
                    <img className="card-img" src={require("../images/"+ this.img)} alt={"En bild på " + this.name} />
                    <Card.Title className="card-title">
                      <h5 className="card-p">{this.name}</h5>
                    </Card.Title>
                  <Button className="card-button" href={"/read-recipe/" + this._id}>Gå till recept</Button>
                  </div>           
                </div>
        </Col>
      </Row>
    );
  }
}