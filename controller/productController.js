const mongoose = require("mongoose");
const productSchema = require("../modals/productModal");
const Product = new mongoose.model("Ecommerse", productSchema);

const product = {
  addProduct: async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(200).send(product);
      if (!product) {
        return res.status({ message: "Product not added" });
      } else {
        return res.status("Product added successfully");
      }
    } catch {
      res.status(200).json({
        message: "server error",
      });
    }
  },
  allProduct: async (req, res) => {
    try {
      const data = await Product.find({});
      res.send(data);
    } catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  },
  product: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const data = await Product.find({ _id: id });
      res.send(data);
    } catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  },
};

module.exports = product;
