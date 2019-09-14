import React, { Component } from "react";
import {InputGroup, FormControl, Button, Container, Row, Col, Card, Title} from 'react-bootstrap';
import REST from "../REST.js";
import { Link } from "react-router-dom";


class Recipe extends REST {}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);
    this.showMoreRecipes = this.showMoreRecipes.bind(this);

    this.state = {
      recipes: [],
      searchInput:'',
      count: 4,
      recipesLength: 0
    }
  }

  async searchHandler(e) {
    let searchInput = e.target.value;
    this.setState({
      searchInput: e.target.value
    })

    let recipes = await Recipe.find('/' + searchInput);
    let recipesLength = recipes.length;
    recipes = recipes.slice(0, this.state.count);
    if(searchInput){
      this.setState({
        recipes: recipes,
        recipesLength: recipesLength
      });
    } else {
      this.setState({
        recipes: [],
        count: 4
      });
    }
  }

  async showMoreRecipes() {
    this.state.count += 4;
    let recipes = await Recipe.find('/' + this.state.searchInput);
    recipes = recipes.splice(0,this.state.count);

    this.setState({
      recipes: recipes,
      count: this.state.count
    })
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <InputGroup className="search-field">
            <FormControl
              className="search-input"
              onChange={this.searchHandler}
              value={this.state.searchInput}
              placeholder="Sök efter recept här..."
              aria-label="Sök efter recept här..."
              aria-describedby="Sök efter recept här..."
            />
          </InputGroup>
        </div>

        {this.state.recipes.length === 0 ? '': 
          <Container className="container-outer">
            <Row className="container-title">
              <Col>
                <h1 className="card-h1">Sökresultat</h1>
              </Col>
            </Row>
            <Row className="container-inner">
              {this.state.recipes.map(recipe => (
                <div className="card-outer special" key={recipe._id}> 
                  <div className="card-inner">
                    <img className="card-img" src={require("../images/"+ recipe.img)} alt={"En bild på " + recipe.name} />
                    <Card.Title className="card-title">
                      <h5 className="card-p">{recipe.name}</h5>
                    </Card.Title>
                  <Button className="card-button" href={"/recipe/" + recipe._id}>Gå till recept</Button>
                  </div>           
                </div>
              ))}
            </Row>
            <Button 
              className="show-more-btn" 
              onClick={this.showMoreRecipes}>
              {this.state.recipesLength <= this.state.count ? 'Inga fler recept': 'Visa fler recept'}
            </Button>
          </Container>
        }
      </div>
    );
  }
}

export default HomePage;