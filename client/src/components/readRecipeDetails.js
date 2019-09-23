import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
import PersonChoices from "./PersonChoices";

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);

    let fatDetails = () => {
      return {
        monounsaturated: 10,
        polyunsaturated: 15,
        unsaturated: 5
      };
    };

    this.state = {
      nutritions: {
        Kcal: 455,
        Protein: 30,
        Fat: fatDetails,
        Carbs: 40,
        Salt: 3
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row className='mt-4'>
          <Col className='col-sm-12 col-md-4 mt-2'>
            <img
              className='card-img read-recipe-img'
              src={require("../images/" + this.props.img)}
              alt={"En bild på " + this.props.name}
            />
          </Col>
          <Col className='col-sm-12 col-md-8'>
            <Row className='offset-1'>
              <Col className='col-sm-12 col-md-8'>
                <h4>{this.props.name}</h4>
              </Col>
              <Col className='offset-2 col-sm-12 col-md-2'>
                <PersonChoices {...this.recipe} />
              </Col>
            </Row>
            <Row className='offset-1'>
              <Col className='col-sm-12 col-md-10'>
                <p>{this.props.startText}</p>
                <h4>Kategori: </h4>
                <p> {this.props.category}</p>
              </Col>
              <Col className='pt-4 col-sm-12'>
                <h4>Tid:</h4>
                <p>{this.props.time} min</p>
              </Col>
            </Row>
            <Row className='offset-1 pt-4'>
              <Col>
                <h4>Näring per portion </h4>
              </Col>
              <Col className='col-md-12 col-sm-12'>
                {Object.keys(this.state.nutritions).map(key => (
                  <ReadRecipeNutrition
                    key={key}
                    nutrientName={key}
                    nutrientValue={this.state.nutritions[key]}
                  />
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
