const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  coordinates: {
    type: String,
  },
  temperature: {
    type: String,
  },
  windDirection: {
    type: String,
  },
});

module.exports = Weather = mongoose.model("weather", WeatherSchema);
