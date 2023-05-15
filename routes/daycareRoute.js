const express = require("express");
const router = express.Router();
const daycareController = require("../controllers/daycareController");



//GET alldaycares in table.
router.route("/").get(daycareController.getAll);

//GET a specific daycare details
router.route('/:id').get(daycareController.getDaycare);

//delete a single daycare from the table
router.route("/:id").delete(daycareController.deleteDaycare);
router.route("/:id").put(daycareController.updateDaycare);

// POST a daycare to table
router.route("/").post(daycareController.createNew);

// GET /daycares/:id/children
router.route("/:id/children").get(daycareController.daycareChildren);

module.exports = router;