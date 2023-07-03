const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
} = require("../controllers/post");

//update a userr
router.route("/").post(createPost).get(getAllPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);

module.exports = router;
