const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username must be provided"],
      unique: [true, "username has been taken"],
    },
    email: {
      type: String,
      required: [true, "email must be provided"],
      unique: [true, "this email address is currently used by another user"],
    },
    password: {
      type: String,
      required: [true, "password must be provided"],
    },
    profiePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
