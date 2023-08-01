const express = require("express");
const {
  LoginController,
  RegisterController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", LoginController);

//POST || REGISTER USER
router.post("/register", RegisterController);

module.exports = router;
