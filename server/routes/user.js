const express = require("express");
const passport = require("passport");
const router = express.Router();

// @route   GET api/user/
// @desc    Get root user page
// @access  Private
router.get("/", passport.authenticate("google"));

module.exports = router;
