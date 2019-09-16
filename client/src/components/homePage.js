import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCardContainer from "./foodCardContainer.js"
import REST from "../REST.js"

class Recipe extends REST{}
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.test();
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

}

  render() {
    return (
      <React.Fragment>
			<div className="search-bar">
				<input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..."/>
			</div>
      <FoodCardContainer/>
      </React.Fragment>
    );
  }
}

export default HomePage;