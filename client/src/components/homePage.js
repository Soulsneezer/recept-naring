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

    this.showJson = this.showJson.bind(this);
    this.state = {recipes: []}
  }

  async componentDidMount(){
    let recipesDB = await Recipe.find();
    this.setState({
      recipes: recipesDB
    });
  }

  showJson() {
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <InputGroup className="search-field">
            <FormControl
              className="search-input"
              placeholder="Sök efter recept här..."
              aria-label="Sök efter recept här..."
              aria-describedby="Sök efter recept här..."
            />
          </InputGroup>
        </div>
        <button onClick={this.showJson}>Show Json</button>
        

        {this.state.recipes.map(recipe => (
          <Card key={recipe._id} style={{ width: '18rem' }}>            
            <Card.Img variant="top" src={require("../images/"+ recipe.img)} alt={recipe.img} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>
                {recipe.startText}
              </Card.Text>
              <Button href="/recipe" variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}


      </div>
    );
  }
}

export default HomePage;