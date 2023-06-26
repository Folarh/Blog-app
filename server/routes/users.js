const express = require("express");
const router = express.Router();

const { updateUser } = require("../controllers/users");

//update a userr
router.route("/:id").put(updateUser);

module.exports = router;
