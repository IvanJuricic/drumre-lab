const express = require("express");
const passport = require("passport");
const router = express.Router();

// @route   GET api/root/
// @desc    Get root page
// @access  Public

router.get("/", (req, res) => {
  res.send("");
});
