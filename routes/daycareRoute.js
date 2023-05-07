const express = require("express");
const router = express.Router();
const daycareController = require("../controllers/daycareController");



//GET alldaycares in table.
router.route("/").get(daycareController.getAll);

module.exports = router;