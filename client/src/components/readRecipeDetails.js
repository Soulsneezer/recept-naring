import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
import PersonChoices from "./PersonChoices";
class Recipe extends REST {}

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
          <img
            className='col-sm-12 col-md-4 mt-2 card-img read-recipe-img'
            src={require("../images/" + this.props.img)}
            alt={"En bild på " + this.props.name}
          />

          <Col className='col-sm-12 col-md-8'>
            <Row className='md-ml-4'>
              <Row>
                <Col className='col-sm-12 col-md-10'>
                  <h1>{this.props.name}</h1>
                </Col>
                <Col className='col-sm-12 col-md-2'>
                  <PersonChoices {...this.recipe} />
                </Col>
              </Row>
              <Col className='col-sm-12 p-0 col-md-10'>
                <Row className='m-0 font-styling'>
                  <p>{this.props.startText}</p>
                </Row>
                <Row className='mt-4 col-sm-12 p-0 font-styling'>
                  <h2>Kategori : </h2> <p> {this.props.category}</p>
                </Row>
                <Row className='mt-4 p-0 col-sm-12 font-styling'>
                  <h2>Tid :</h2>
                  <p>{this.props.time} min</p>
                </Row>
                <Row className='mt-5 col-sm-12 md-ml-4 p-0 font-styling'>
                  <h2>Näring per portion </h2>
                </Row>
                <Row className='col-sm-12 sm-ml-4 col-md-12 md-ml-4'>
                  {Object.keys(this.state.nutritions).map(key => (
                    <ReadRecipeNutrition
                      key={key}
                      nutrientName={key}
                      nutrientValue={this.state.nutritions[key]}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
