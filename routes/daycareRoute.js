const express = require("express");
const router = express.Router();
const daycareController = require("../controllers/daycareController");



//GET alldaycares in table.
router.route("/").get(daycareController.getAll);

//GET a specific daycare details
router.route('/:id').get(daycareController.getDaycare);

module.exports = router;