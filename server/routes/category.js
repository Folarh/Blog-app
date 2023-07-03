const express = require("express");
const router = express.Router();

const { getAllCat, postAllCat } = require("../controllers/category");
//category
router.route("/").get(getAllCat).post(postAllCat);

module.exports = router;
