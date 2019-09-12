const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1. Create a schema for a livsmedel
let recipeSchema = new Schema(  {
 "Namn": String,
 "Kategori": [String],
 "Steg": Object,
 "Ingredienser": Object,
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