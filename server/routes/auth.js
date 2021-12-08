const express = require("express");
const passport = require("passport");
const router = express.Router();
require("../config/passport");

// @route   GET api/auth/login
// @desc    Login user via passport and google
// @access  Public
router.get(
  "/login",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// @route   GET api/auth/logout
// @desc    Logout
// @access  Private
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

// @route   GET api/auth/failure
// @desc    Unsuccessful login
// @access  Public
router.get("/failure", (req, res) => {
  res.send("Not authorized");
});

// @route   GET api/auth/google/callback
// @desc    Login user via passport and google
// @access  Public
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/user/",
    failureRedirect: "/failure",
  })
);

module.exports = router;
