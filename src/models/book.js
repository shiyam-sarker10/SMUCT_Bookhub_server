const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  bookImage: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
