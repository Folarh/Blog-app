const User = require("../models/user");
const Post = require("../models/post");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//UPDATE A USER
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("you can update only your account");
  }
};

//---------------DELETE A USER--------------------
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    ///DELETING A USER INCLUDING ALL THE POSTS CONTENT
    try {
      const user = await User.findById(req.params.id);
      try {
        //deleting a user posts
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("user not found");
    }
  } else {
    res.status(401).json("you can delete only your account");
  }
};

//---------------GET A USER--------------------
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { updateUser, deleteUser, getUser };
