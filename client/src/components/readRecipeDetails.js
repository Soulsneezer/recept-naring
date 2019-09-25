import React, { Component } from "react";
import {
  Row,
  Col
} from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.nutes= {
      Kcal: 0,
      "Enkelmättat fett": 0,
      "Enkelomättat fett": 0,
      "Mättat fett": 0,
      Protein: 0,
      Kolhydrater: 0
    }

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
    this.hej()
  }
      hej(){
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
          console.log(i)
          let asdf = converter(i.name , i.qty ,i.type )
          kcal += i.nutrient.kcal / 100 * asdf
          console.log(kcal)
            monoUnSaturatedFats +=i.nutrient.monoUnSaturatedFats / 100 * asdf
            monoSaturatedFats += i.nutrient.monoSaturatedFats / 100 * asdf
            saturatedFats += i.nutrient.saturatedFats / 100 * asdf
            prots += i.nutrient.prots / 100 * asdf
            carbs += i.nutrient.carbs / 100 * asdf
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
        <Row className='mt-2'>
          <h1>{this.props.name}</h1>
        </Row>
        <Row className='mt-2 font-styling'>
          <p>{this.props.startText}</p>
        </Row>
        <Row className='mt-4'>
          <h3>Tag:  {this.props.category.join(", ")}</h3>
        </Row>
        <Row className='mt-4'>
          <h3> Tid: {this.props.time} min</h3>
        </Row>
        <Row>
          <Col>
          <h3 className='mt-5'>Näring per portion </h3>
          </Col>
        <Row> 
        </Row>
        <Row>
        <Col>
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
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
