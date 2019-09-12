const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ingredient = require('./ingredient.js');
// 1. Create a schema for a livsmedel
let recipeSchema = new Schema(  {
 "name": String,
 "category": [String],
 "step": [String],
 "ingredient": [Ingredient.schema],
 "img": String,
 "portion": Number,
 "startText": String,
});
module.exports = db.model('Recipe', recipeSchema); 