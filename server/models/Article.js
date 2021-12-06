const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  articleID: {
    type: String,
  },
  publishDate: {
    type: String,
  },
  title: {
    type: String,
  },
  abstract: {
    type: String,
  },
});

module.exports = Article = new mongoose.model("article", ArticleSchema);
