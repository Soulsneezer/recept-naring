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


function startWebServer() {

  // Create a web server
  const app = express();

  // A route that returns all books from Mongo
  app.get('/json/makronutrients', async (req, res) => {
    let makronutrients = await Makronutrient.find();
    res.json(makronutrients);
  });


  // Start the web server
  app.listen(5000, () => console.log('Listening on port 5000'));
}