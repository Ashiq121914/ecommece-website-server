const User = require("../modals/userModal");

const userController = {
  registration: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).send(user);
      if (!user) {
        return res.json("user not created");
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  login: async (req, res) => {
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ userEmail, userPassword });
    res.status(200).send("login successfully");
    if (!user) {
      return res.json({ status: "User not found" });
    }
  },
};

module.exports = userController;
