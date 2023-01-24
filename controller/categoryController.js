const Category = require("../models/categorySchema");

const category = {
  getCategory: async (req, res) => {
    try {
      const data = await Category.find();

      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  addCategory: async (req, res) => {
    try {
      const data = req.body;
      const oneCategory = new Category(data);
      const result = await oneCategory.save();

      res.send("Category added");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = category;
