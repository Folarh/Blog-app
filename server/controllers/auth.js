const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const loginUser = async (req, res) => {
  try {
    //finding if a user is in d database and it exist
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("wrong credentials");
    //comparing if the user password exits or correct
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("wrong credentials");
    //not allowing users to have access to a users password, but can see other infomration
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser, loginUser };
