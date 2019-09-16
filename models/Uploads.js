

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let uploadsSchema = new Schema({
    url: { type: String, required: true },

})
module.exports = mongoose.model('Uploads', uploadsSchema);