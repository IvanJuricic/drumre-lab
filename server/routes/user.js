const express = require("express");
const axios = require("axios");
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

// @route   GET api/user/weather
// @desc    Get weather data for Zagreb and K. Luksic
// @access  Private
router.get("/weather", isLoggedIn, async (req, res) => {
  const weatherData = [];

  zagrebURI = encodeURI(
    `http://api.weatherstack.com/current?access_key=045de1a01fa4a9c4bf905d849ba63aee&query=Zagreb`
  );
  kastelaURI = encodeURI(
    `http://api.weatherstack.com/current?access_key=045de1a01fa4a9c4bf905d849ba63aee&query=Lukšić`
  );

  const weatherZagreb = await axios
    .get(zagrebURI)
    .catch((err) => console.log("Error ", err));
  //console.log(weatherZagreb.data);
  weatherData.push(weatherZagreb.data.current);

  const weatherKastela = await axios
    .get(kastelaURI)
    .catch((err) => console.log("Error ", err));
  //console.log(weatherKastela);
  weatherData.push(weatherKastela.data.current);

  res.send(weatherData);
});

// @route   GET api/user/articles
// @desc    Get most popular articles from NY Times
// @access  Private
router.get("/articles", isLoggedIn, async (req, res) => {
  const articles = await axios
    .get(
      "https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=5mAher9erIyuRGJDd1lBZM4afqh1A6ay"
    )
    .catch((err) => console.log("Error getting articles ", err));

  console.log("Clanci => ", articles.data.results);

  res.send(articles.data.results);
});

module.exports = router;
