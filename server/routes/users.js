const express = require("express");
const router = express.Router();

const { updateUser, deleteUser, getUser } = require("../controllers/users");

//update a userr
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;
