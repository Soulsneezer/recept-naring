// This program needs to be run once
// to import our book data from JSON to MongoDB
 
const mongoose = require('mongoose');
 
// Connect to db
let dbName = 'Makronutrient'
mongoose.connect(`mongodb://localhost/${dbName}`);
global.db = mongoose.connection;
db.on('error', () => console.log('Could not connect to DB'));
db.once('open', () => {
  console.log('Connected to DB');
  importJsonDataToDb();
});
 
// Load the Mongoose model for a Scrape
let Scrape = require('./models/Scrape.js');
 
// Load the json data from file
let scrapeData = require('./foodUnits.json');
 
async function importJsonDataToDb(){
  let allScrapeCount = await Scrape.count();
  // if the db already contains scrape then delete them
  if(allScrapeCount > 0){
    console.log('Deleted old scrapes', await Scrape.remove({}));
  }
  for(let data of scrapeData){
    let scrape = new Scrape(data);
    // save the scrape to MongoDB
    await scrape.save();
  }
  // after the import count the scrapes again
  allScrapeCount = await Scrape.count();
  console.log(`Imported ${allScrapeCount} scrapes to the database`);
  // Exit the app
  process.exit();
}