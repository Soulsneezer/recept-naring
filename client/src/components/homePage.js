import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  Img,
  Body,
  Title,
  Text
} from "react-bootstrap";
import REST from "../REST.js";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import FoodCardContainer from "./foodCardContainer";
import HomePageRecipeHeadline from "./homePageRecipeHeadline";

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
      searchInput: "",
      images: [
        "url('/images/backgroundImages/background-img1.jpg')",
        "url('/images/backgroundImages/chickenTaco.jpg')"
      ],
      selectedImage: "url('/images/backgroundImages/background-img1.jpg')"
    };
  }
  async test(){
  let recipe = new Recipe({
		"name": "mells italiensk kycklinggryta med kokosnötter",
		"category": [
			"Enkelt",
			"Kyckling",
			"Snabbt",
			"Vardagsmiddag"
		],
		"step": [
			"Koka pastan enligt anvisningar på förpackningen.",
			"Fräs kycklingen på medelvärme tills den får lite färg runt om i cirka 5 minuter. Salta och peppra.",
			"Finhacka vitlöken och chilin och stek med kycklingen i cirka 2 minuter.",
			"Krydda med timjan och oregano och häll i buljongen, grädden och kokta upp, dra till sidan och tillsätt parmesanen."
		],
		"ingredient": [
			{
				"name": " kycklinglårfiléer",
				"qty": 8,
				"type": "st"
			},
			{
				"name": "flingsalt",
				"qty": 1,
				"type": "nypa"
			},
			{
				"name": " svartpeppar",
				"qty": 1,
				"type": "nypa"
			},
			{
				"name": " vitlök",
				"qty": 1,
				"type": "st"
			},
			{
				"name": "chilifrukt",
				"qty": 0.5,
				"type": "st"
			},
			{
				"name": "torkad timjan",
				"qty": 1,
				"type": "tsk"
			},
			{
				"name": " torkad oregano",
				"qty": 1,
				"type": "tsk"
			},
			{
				"name": "kycklingbuljong",
				"qty": 3,
				"type": "dl"
			},
			{
				"name": " vispgrädde",
				"qty": 1.5,
				"type": "dl"
			},
			{
				"name": "parmesan",
				"qty": 1,
				"type": "dl"
			},
			{
				"name": "pasta",
				"qty": 4,
				"type": "port"
			}
		],
		"img": "chickenParmesan.jpg",
		"portion": 4,
		"startText": "Italiensk kycklinggratäng med parmesan och örter som egentligen inte har något med Italien att göra, utan är vår version på italiensk mat på 90-talet. /Tareq"
  })
  console.log(await recipe.save())
  let hittarEttRecept = await Recipe.find(
    `.findOne({_id:'5d7948561ffa6d403e3c3976'})`
  );
  console.log(hittarEttRecept)

  async searchHandler(e) {
    let searchInput = e.target.value;
    this.setState({
      searchInput: e.target.value
    });

    let recipes = await Recipe.find("/" + searchInput);
    if (searchInput) {
      this.setState({
        recipes: recipes
      });
    } else {
      this.setState({
        recipes: []
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          selectedImage:
            prevState.selectedImage === this.state.images[0]
              ? this.state.images[1]
              : this.state.images[0]
        };
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className='search-bar'>
          <InputGroup className='search-field'>
            <FormControl
              className='search-input'
              onChange={this.searchHandler}
              value={this.state.searchInput}
              placeholder='Sök efter recept här...'
              aria-label='Sök efter recept här...'
              aria-describedby='Sök efter recept här...'
            />
          </InputGroup>
        </div>

        {this.state.recipes.map(recipe => (
          <Card key={recipe._id} style={{ width: "18rem" }}>
            <Card.Img
              variant='top'
              src={require("../images/" + recipe.img)}
              alt={recipe.img}
            />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>{recipe.startText}</Card.Text>
              <Button href={"/recipe/" + recipe._id} variant='primary'>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default HomePage;
