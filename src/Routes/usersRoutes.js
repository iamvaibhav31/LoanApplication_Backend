const usercontroller = require("../Controllers/usersController");
const auth = require("../Middlewares/auth");
const express = require("express");
const router = express.Router();

router.post("/register", usercontroller.register);
router.post("/login", usercontroller.login);
module.exports = router;

// authenticateToken
