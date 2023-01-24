const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
  img: {
    type: String,
  },
  category_id: {
    type: String,
  },
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
