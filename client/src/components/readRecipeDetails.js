import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ReadRecipeNutrition from "./readRecipeNutrition";
import tagIcon from "../images/icon-tag.png";
import clockIcon from "../images/clock.png";

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.nutes = {
      Kcal: 0,
      "Enkelmättat fett": 0,
      "Enkelomättat fett": 0,
      "Mättat fett": 0,
      Protein: 0,
      Kolhydrater: 0
    };

    let fatDetails = () => {
      return {
        monounsaturated: this.monoUnSaturatedFats,
        polyunsaturated: this.saturatedFats,
        unsaturated: this.saturatedFats
      };
    };

    this.state = {
      nutritions: {
        Kcal: this.kcal,
        Protein: this.prots,
        Fat: fatDetails,
        Carbs: this.carbs,
        Salt: 3
      }
    };
  }
  componentDidMount(){
    this.countingCals()
  }
  countingCals(){
    let kcal = 0;
    let monoSaturatedFats = 0;
    let monoUnSaturatedFats = 0;
    let saturatedFats = 0;
    let prots = 0;
    let carbs = 0;        
 
   let converter = (name, qty, unit) =>{
      const unitsToGram = {
        kg: 1000,
        hg: 100,
        g: 1,
        mg: 0.001,
        // approximate (see exceptions below)
        l: 1000,
        dl: 100,
        cl: 10,
        ml: 1,
        tsk: 5,
        msk: 15,
        krm: 1,
        nypa: 1,
        port: 300,
        // very approximate
        // (although rather true for eggs, tomatoes, bell peppers etc)
        st: 60
        // we miss all those small ones.. kryddmått etc.
      }
     
      const exceptions = [
        { baseUnit: 'l', nameHas: 'mjöl', modifier: 0.6 },
        { baseUnit: 'l', nameHas: 'olja', modifier: 0.9 },
        { baseUnit: 'l', nameHas: 'havregryn', modifier: 0.6 },
        { baseUnit: 'st', nameHas: 'kycklingfilé', modifier: 1500 / unitsToGram.st },
        { baseUnit: 'st', nameHas: 'kycklinglår', modifier: 80 / unitsToGram.st },
        { baseUnit: 'st', nameHas: 'kyckling', modifier: 1200 / unitsToGram.st },
        { baseUnit: 'st', nameHas: 'lax', modifier: 3000 / unitsToGram.st }
      ];
     
      // get the conversion factor from toGram
      let factor = unitsToGram[unit];
     
      // change it if any exception applies
      for (let x of exceptions) {
        if (unit.includes(x.baseUnit) && name.includes(x.nameHas)) {
          factor *= x.modifier;
          break;
        }
      }
 
      return factor * qty;
    }
    for(let i of this.props.ingredient){
      let convertedNumbers = converter(i.name , i.qty ,i.type )
      kcal += i.nutrient.kcal / 100 * convertedNumbers
        monoUnSaturatedFats +=i.nutrient.monoUnSaturatedFats / 100 * convertedNumbers
        monoSaturatedFats += i.nutrient.monoSaturatedFats / 100 * convertedNumbers
        saturatedFats += i.nutrient.saturatedFats / 100 * convertedNumbers
        prots += i.nutrient.prots / 100 * convertedNumbers
        carbs += i.nutrient.carbs / 100 * convertedNumbers
    }

    this.nutes.Kcal = Math.round(kcal / this.props.portion)
    this.nutes["Enkelomättat fett"] = Math.round(monoUnSaturatedFats / this.props.portion)
    this.nutes["Enkelmättat fett"] = Math.round(monoSaturatedFats / this.props.portion)
    this.nutes["Mättat fett"] = Math.round(saturatedFats / this.props.portion)
    this.nutes.Protein = Math.round(prots / this.props.portion)
    this.nutes.Kolhydrater = Math.round(carbs / this.props.portion)
    this.setState({state: this.state})
    this.render()
  }


  render() {
    return (
      <React.Fragment>
        <Row className="mt-4">
          <Col className="pt-4" xs={12} sm={12} md={12} lg={4}>
            <div
              className="card-img read-recipe-img"
              label={this.props.name}
              style={{
                backgroundImage:
                'url("../images/recipeImages/' + this.props.img + '")'
              }}
            ></div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Row>
              <Col xs={{span: 11, offset: 1, order: 2}} sm={{ span: 12, offset: 0, order: 2 }} md={{ span:7, offset: 1, order: 1 }} lg={{span: 7, offset: 1, order: 1}} className="align-right pt-4 recipe-name">
                <h4>{this.props.name}</h4>
              </Col>
            
            </Row>
            <Row xs={12} sm={{span: 12, offset: 0}} md={{span: 12, offset: 0, order: 1}} lg={{span: 12, offset: 1}} className="offset-1 pt-2">
              <Col xs={{span:11, offset:0}} sm={{span:10, offset:0}} md={{span:10, offset:0}} className="col-sm-12 col-md-12 pt-2">
                <p md={8}
                 label="kort beskrivning av receptet">{this.props.startText}</p>
                 </Col>
                <div xs={12} sm={12} md={12} className=" pl-3 d-inline-block pt-5">
                  <img src={tagIcon} className="mr-2 d-inline-block" alt="kategorier" />
                  <h6 lable="kategorier" className="d-inline-block">
                    {this.props.category.join(", ")}
                  </h6>
                </div>
              <Col className="pt-5 col-sm-12 d-inline-block">
                <img src={clockIcon} className="mr-2 d-inline-block icon" alt="beräknad tid" />
                <h6 className="d-inline-block"> {this.props.time} min</h6>
              </Col>
            </Row>
            <Row className="offset-1 pt-4">
              <Col>
                <h5 className="pt-5" xs={{ span: 10, offset: 0 }} sm={{ span: 10, offset: 0 }}>
                   Näring per portion 
                </h5>
              </Col>
            </Row>
            <Row>
              <Col xs={{span:11, offset:1,}} className="offset-1 col-md-11">
                {Object.keys(this.nutes).map(key => (
                  <ReadRecipeNutrition
                    key={key}
                    nutrientName={key}
                    nutrientValue={this.nutes[key]}
                    prots={this.nutes}
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
