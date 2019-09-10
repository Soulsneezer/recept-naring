// This program needs to be run once
// to import our  data from JSON to MongoDB
 
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
 
// Load the Mongoose model for a Makronutrient
let Makronutrient = require('./models/Makronutrient');
 
// Load the json data from file
let makronutrientData = require('./dataCleaner.json');
 
async function importJsonDataToDb(){
  let allMakronutrientCount = await Makronutrient.count();
  // if the db already contains books then delete them
  if(allMakronutrientCount > 0){
    console.log('Deleted old makronutrient', await Makronutrient.remove({}));
  }
  for(let data of makronutrientData){
    let makronutrient = new Makronutrient(data);
    // save the makronutrient to MongoDB
    await makronutrient.save();
  }
  // after the import count the Makronutrient again
  allMakronutrientCount = await Makronutrient.count();
  console.log(`Imported ${allMakronutrientsCount} makronutrients to the database`);
  // Exit the app
  process.exit();
}