const express = require("express");
const passport = require("passport");
const router = express.Router();
const isLoggedIn = require("../middleware/auth");

const User = require("../models/User");

// @route   GET api/user/
// @desc    Get root user page
// @access  Private
router.get("/", isLoggedIn, async (req, res) => {
  const user = new User();
  user.name = req.user.name.givenName;
  user.surname = req.user.name.familyName;
  user.email = req.user.email;
  user.googleId = req.user.id;
  try {
    await User.find({ email: user.email }, (err, data) => {
      if (err) console.log("GRESKA ", err);
      if (data.length != 0);
    }).then(user.save());
  } catch (err) {
    console.log(err);
  }

  res.send(user);
});

module.exports = router;
