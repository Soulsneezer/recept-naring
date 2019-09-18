const express = require('express');
const mongoose = require('mongoose');

// Connect to db
let dbName = "Makronutrient";
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  startWebServer();
})


// Import Makronutrient mongoose model
const Makronutrient = require('./models/Makronutrient');

// Import Recipe mongoose model
const Recipe = require('./models/Recipe');


function startWebServer() {

  // Create a web server
  const app = express();

  // A route that returns all makronutrients from Mongo
  app.get('/json/makronutrients', async (req, res) => {
    let makronutrients = await Makronutrient.find();
    res.json(makronutrients);
  });

  // A route that returns all recipes from Mongo
  app.get('/json/recipes', async (req, res) => {
    let recipes = await Recipe.find();
    res.json(recipes);
  });

  app.get('/json/recipes/:partialRecipe', async (req, res) => {
    const regExpression = new RegExp(req.params.partialRecipe, "i");
    let recipes = await Recipe.find({ name: regExpression }).catch((err) => {
      res.json({ error: err });
    });
    res.json(recipes);
  });

  app.get('/json/recipeswiththiscategorys/:partialCategory', async (req, res) => {
    let recipes = await Recipe.find();
    const regExpression = new RegExp(req.params.partialCategory, "i");
    let recipesWithThisCategory = [];

    for(recipe of recipes) {
      for(let category of recipe.category){
        if(category.match(regExpression)){
          recipesWithThisCategory.push(recipe);
          break;
        }
      }
    };
    res.json(recipesWithThisCategory);
  });

  // Start the web server
  app.listen(5000, () => console.log('Listening on port 5000'));
}