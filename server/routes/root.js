const express = require("express");
const passport = require("passport");
const router = express.Router();
const axios = require("axios");

// @route   GET api/root/
// @desc    Get root page
// @access  Public

router.get("/", async (req, res) => {
  const weatherData = [];

  zagrebURI = encodeURI(
    `http://api.weatherstack.com/current?access_key=045de1a01fa4a9c4bf905d849ba63aee&query=Zagreb`
  );
  //kastelaURI = encodeURI(
  //  `http://api.weatherstack.com/current?access_key=045de1a01fa4a9c4bf905d849ba63aee&query=Lukšić`
  //);

  const weatherZagreb = await axios
    .get(zagrebURI)
    .catch((err) => console.log("Error ", err));
  //console.log(weatherZagreb.data);
  weatherData.push(weatherZagreb.data.current);

  const articles = await axios
    .get(
      "https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=5mAher9erIyuRGJDd1lBZM4afqh1A6ay"
    )
    .catch((err) => console.log("Error getting articles ", err));

  //console.log("Clanci => ", articles.data.results);

  nytData = articles.data.results;

  res.render("home", {
    nytData,
    weatherData,
  });
});

module.exports = router;
