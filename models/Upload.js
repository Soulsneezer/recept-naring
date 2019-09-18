const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let uploadsSchema = new Schema({
  url: String
});
module.exports = mongoose.model("Upload", uploadsSchema);
