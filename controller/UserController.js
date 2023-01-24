const User = require("../modals/userModal");

const userController = {
  registration: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
      if (!user) {
        return res.status("user not created");
      } else {
        return res.status("user added successfully");
      }
    } catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const userData = req.body;
      User.findOne(
        {
          email: req.body.userEmail,
          password: req.body.userPassword,
        },
        async function (err, data) {
          if (err) {
            console.log(err);
          } else {
            if (data) {
              res.send([data]);
            } else {
              res.send([]);
            }
          }
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = userController;
