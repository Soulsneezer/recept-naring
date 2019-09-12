import React, { Component } from "react";
import {InputGroup, FormControl, Button, Card, Img, Body, Title, Text} from 'react-bootstrap';
import REST from "../REST.js";
import { Link } from "react-router-dom";

class Recipe extends REST {
  static get baseRoute() {
    return "recipes";
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      recipes: [],
      searchInput:''
    }
  }

  async searchHandler(e) {
    let searchInput = e.target.value;
    this.setState({
      searchInput: e.target.value
    })

    let recipes = await Recipe.find('/' + searchInput);
    if(searchInput){
      this.setState({
        recipes: recipes
      });
    } else {
      this.setState({
        recipes: []
      });
    }
    
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

        {this.state.recipes.map(recipe => (
          <Card key={recipe._id} style={{ width: '18rem' }}>            
            <Card.Img variant="top" src={require("../images/"+ recipe.img)} alt={recipe.img} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>
                {recipe.startText}
              </Card.Text>
              <Button href={"/recipe/" + recipe._id} variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}

      </div>
    );
  }
}

export default HomePage;