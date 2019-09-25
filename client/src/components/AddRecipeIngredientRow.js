import React, { Component } from 'react';
import { Form, Col, Row, Dropdown, Menu } from 'react-bootstrap';
import RemoveRowButton from './AddRecipeRemoveButton';
import AddRecipeUnits from './AddRecipeUnits';
import REST from '../REST.js';
import { Typeahead } from 'react-bootstrap-typeahead';
const uuid4 = require('uuid/v4');
class Makronutrient extends REST{}
//{makronutrient: Makronutrient, index: Makronutrient.name.indexOf(searchterm)}


class AddRecipeIngredientRow extends Component {
  constructor(props){
    super(props);
    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      searchInput: "",
      results: [],
      selected: []
    }
  }
    
    async searchHandler(e){
      let searchInput = e.target.value;
      searchInput = searchInput.trim();
      this.setState({
        searchInput: e.target.value
      });
      if(searchInput.length > 3){
        console.log("hej")
        let foundIngredient =  await Makronutrient.find(
          `.find({name:/${searchInput}/i})`);
          this.setState({
            results: foundIngredient
          })
        let alla = await Makronutrient.find()
        console.log(this.state.results)
        console.log(foundIngredient)
      }
    }
  render() {
    const id = uuid4();

    return (
      <React.Fragment>
        <Row className="mt-3" aria-label="tre ingrediensrader">
          <Col xs={5} sm={6} md={3} lg={3} className="mt-2 pr-0">
            <Form.Control className="recipe-name" input="true" aria-labelledby="mängden" placeholder="mängden" />
          </Col>
          <Col xs={5} sm={4} md={3} lg={2} className="units-dropdown mt-2 pr-0">
            <AddRecipeUnits />
          </Col>
          <Col xs={10} sm={11} md={5} lg={6} className="mt-2">
            <Form.Control className="recipe-name" input="true" placeholder="ingrediensen" aria-labelledby="ingrediensen"onChange={this.searchHandler} value={this.state.searchInput} />
              {this.state.results ?  <Typeahead
                    {...this.state}
                    id="basic-example"
                    onChange={selected => this.setState({ selected })}
                    options={this.state.results.name}
                    placeholder="Choose a state..."
                    labelKey="name"
                  />
                : null
                }
          </Col>
          <Col xs={1} md={1} className="MdARemoveCircleOutline align-right mt-2">
            <RemoveRowButton key={id} onClick={() => this.props.deleteMe(this.props.remove)} aria-label="radera en ingrediensrad" />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AddRecipeIngredientRow;