const express = require("express");
const router = express.Router();
const childrenController = require("../controllers/childrenController");

//GET all children in table.
router.route("/").get(childrenController.getAll);


module.exports = router;