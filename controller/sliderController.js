const Slider = require("../modals/sliderModal");

const slider = {
  getSlider: async (req, res) => {
    try {
      const data = await Slider.find();
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  addSlider: async (req, res) => {
    try {
      const data = req.body;

      const slider = new Slider(data);
      const result = await slider.save();

      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = slider;
