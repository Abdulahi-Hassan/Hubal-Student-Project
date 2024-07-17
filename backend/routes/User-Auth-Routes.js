const express = require("express");

const router = express.Router();

const UserAuthController = require("../controller/User-Auth-Controller");

router
  .post("/signup", UserAuthController.SignUp)
  .post("/login", UserAuthController.Login)
  .post("/logout", UserAuthController.Logout)
  .post("/change", UserAuthController.Change);

module.exports = router;
