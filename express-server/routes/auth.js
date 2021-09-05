const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  username
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/username").post(username);

router.route("/passwordreset/:resetToken").put(resetPassword);

module.exports = router;