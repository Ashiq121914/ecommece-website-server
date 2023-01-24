const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  category: String,
  price: String,
  description: String,
  img: String,
});

module.exports = productSchema;
