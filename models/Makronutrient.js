const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1. Create a schema for a livsmedel
let makronutrientSchema = new Schema(  {
 "Namn": String,
 "Huvudgrupp": String,
 "Naringsvarden": {
 "Summa mättade fettsyror": Number,
 "Summa enkelomättade fettsyror": Number,
   "Summa fleromättade fettsyror": Number,
   "Kolhydrater": Number,
   "Protein": Number,
   "Salt": Number,
   "Energi (kcal)": Number
 },
});
// 3. Create the model and export it
//livsmedelSchema.loadClass(LivsmedelClass);
module.exports = db.model('Makronutrient', makronutrientSchema); 