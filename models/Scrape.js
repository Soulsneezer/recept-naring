const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// 1. Create a schema for a livsmedel
let ScrapeSchema = new Schema(  {
  "name": String,
  "1dl": Number,
  "1smallUnit": Number,
  "1mediumUnit": Number,
  "1largeUnit": Number,
  "1portion": Number
});
 
// 3. Create the model and export it
//livsmedelSchema.loadClass(LivsmedelClass);
module.exports = db.model('FoodUnit', ScrapeSchema);