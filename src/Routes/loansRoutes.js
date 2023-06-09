const loansController = require("../Controllers/loansController");
const auth = require("../Middlewares/auth");
const express = require("express");
const router = express.Router();

router.get("/", loansController.loans);
router.post("/apply", loansController.apply);
router.get("/:id", loansController.loanDetails);
module.exports = router;

// authenticateToken
