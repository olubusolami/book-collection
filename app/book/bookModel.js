const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    isbn: {
      type: String,
      required: [true, "ISBN number is required."],
      unique: true,
    },
    coverImage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
