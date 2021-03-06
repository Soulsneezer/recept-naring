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
let Recipe = require('./models/Recipe')
 
// Load the json data from file
let makronutrientData = require('./dataCleaner.json');
let recipes = require('./Recipes.json')

async function importJsonDataToDb(){
  let allMakronutrientCount = await Makronutrient.count();
  let allRecipesCount = await Recipe.count();
  
  if(allRecipesCount > 0){
    console.log("Deleted old recipes", await Recipe.remove({}));
  }
  if(allMakronutrientCount > 0){
    console.log('Deleted old makronutrient', await Makronutrient.remove({}));
  }
  for(let data of recipes){
    let recipe = new Recipe(data);
    await recipe.save();
  }

  for(let data of makronutrientData){
    let engObj = {name: data.Namn, headGroup: data.Huvudgrupp , nutrients: {saturatedFats: data.Naringsvarden["Summa mättade fettsyror"], monoSaturatedFats: data.Naringsvarden['Summa enkelomättade fettsyror'],monoUnSaturatedFats: data.Naringsvarden["Summa fleromättade fettsyror"], carbs: data.Naringsvarden["Kolhydrater"] , prots: data.Naringsvarden["Protein"] , salt: data.Naringsvarden["Salt"], kcal: data.Naringsvarden["Energi (kcal)"]} }
    let makronutrient = new Makronutrient(engObj);
     //save the makronutrient to MongoDB
    await makronutrient.save();
  }
  // after the import count the Makronutrient again
  allMakronutrientCount = await Makronutrient.count();
  allRecipesCount = await Recipe.count();

  console.log(`Imported ${allMakronutrientsCount} makronutrients to the database`);
  // Exit the app
  process.exit();
}