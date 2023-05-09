const express = require("express");
const router = express.Router();
const childrenController = require("../controllers/childrenController");

//GET all children in table.
router.route("/").get(childrenController.getAll);

// get a child by id
router.route('/:id').get(childrenController.getChild).put(childrenController.updateChild);


//register new child
router.route("/").post(childrenController.registerNewChild);
module.exports = router;