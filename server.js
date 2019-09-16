const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CreateRestRoutes = require('./CreateRestRoutes');

// Connect to db
let dbName = "Makronutrient";
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on("error", () => console.log("Could not connect to DB"));
db.once("open", () => {
  console.log("Connected to DB");
  startWebServer();
});
// Import Makronutrient mongoose model


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
    Recipes: require('./models/Recipe.js')
  };

  // create all necessary rest routes for the models
  new CreateRestRoutes(app, global.db, models);


  // Start the web server
  app.listen(5000, () => console.log("Listening on port 5000"));
}
