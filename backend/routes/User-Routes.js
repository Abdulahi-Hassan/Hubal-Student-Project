const express = require("express");
const router = express.Router();
const UserController = require("../controller/User-Controller");
const UserProtocol = require("../middleware/User-Middleware");
router
  .get("/users", UserProtocol, UserController.GetAllUsers)
  .get("/user/:id", UserController.GetUser)
  .put("/user/:id", UserController.UpdateUser)
  .delete("/user/:id", UserController.DeleteUser);
module.exports = router;
