const express = require("express");
const slider = require("../controller/sliderController");
const router = new express.Router();

router.get("/getSlider", slider.getSlider);
router.post("/addSlider", slider.addSlider);

module.exports = router;
