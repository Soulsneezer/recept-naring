const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1. Create a schema for a livsmedel
let makronutrientSchema = new Schema(  {
 "name": String,
 "headGroup": String,
 "nutrients": {
 "saturatedFats": Number,
 "monoSaturatedFats": Number,
   "monoUnSaturatedFats": Number,
   "carbs": Number,
   "prots": Number,
   "salt": Number,
   "kcal": Number
 },
});
// 3. Create the model and export it
//livsmedelSchema.loadClass(LivsmedelClass);
module.exports = db.model('Makronutrient', makronutrientSchema); 