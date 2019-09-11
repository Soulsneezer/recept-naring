const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ingredientSchema = require('./ingredient.js');
// 1. Create a schema for a livsmedel
let recipeSchema = new Schema(  {
 "Namn": String,
 "Kategori": [String],
 "Steg": Object,
 "Ingrediens": [Ingredient.Schema],
 "Img": String,
 "Portion": Number,
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
module.exports = db.model('Recipie', recipeSchema); 