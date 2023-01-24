const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  img: {
    type: String,
  },
});

const Slider = mongoose.model("slider", sliderSchema);
module.exports = Slider;
