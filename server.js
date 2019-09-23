const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CreateRestRoutes = require('./CreateRestRoutes');

// Connect to db
let dbName = "Makronutrient";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });
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

  app.use(bodyParser.json());

  // A route that returns all books from Mongo
  /* app.get('/json/makronutrients', async (req, res) => {
      let makronutrients = await Makronutrient.find();
      res.json(makronutrients);
    });*/
  const models = {
      Makronutrients: require('./models/Makronutrient.js'),
      Recipes: require('./models/Recipe.js'),
      Uploads: require('./models/Upload.js'),
      Scrapes: require('./models/Scrape.js')
  };

  // create all necessary rest routes for the models
  new CreateRestRoutes(app, global.db, models);


  // A route that returns all makronutrients from Mongo
  app.get('/json/makronutrients', async (req, res) => {
    let makronutrients = await Makronutrient.find();
    res.json(makronutrients);
  });

  // A route that returns all recipes from Mongo
  app.get('/json/recipezs', async (req, res) => {
    let recipes = await Recipe.find();
    res.json(recipes);
  });

  app.get('/json/recipezs/:partialRecipe', async (req, res) => {
    const regExpression = new RegExp(req.params.partialRecipe, "i");
    let recipes = await Recipe.find({ name: regExpression }).catch((err) => {
      res.json({ error: err });
    });
    res.json(recipes);
  });

  app.get('/json/recipeswiththiscategorys/:partialCategory', async (req, res) => {
    const regExpression = new RegExp(req.params.partialCategory, "i");
    let recipes = await Recipe.find({ category: regExpression }).catch((err) => {
      res.json({ error: err});
    });
    res.json(recipes);
  });


  // Start the web server
  app.listen(5000, () => console.log('Listening on port 5000'));
}

