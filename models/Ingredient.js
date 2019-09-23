const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ingredientSchema = new Schema({
    name: {type: String,  required: true},
    type: {type: String, required: true},
    qty: {type: Number,  required: true},
    nutrient: {type: Object, required: true}

})
module.exports = mongoose.model('Ingredient', ingredientSchema);