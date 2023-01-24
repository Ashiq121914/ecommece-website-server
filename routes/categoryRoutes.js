const express = require("express");
const category = require("../controller/categoryController");

const router = new express.Router();

router.get("/getCategories", category.getCategory);
router.post("/addCategories", category.addCategory);

module.exports = router;
