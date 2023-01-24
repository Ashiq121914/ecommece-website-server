const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

router.post("/", productController.addProduct);
router.get("/all", productController.allProduct);
router.get("/:id", productController.product);

module.exports = router;
