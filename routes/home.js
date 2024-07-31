const express = require("express");
const app = express();

//welcome note
app.get("/", (req, res) => {
  res.send("Welcome to Olúbùsọ́lá book collection hub 🙌");
});
module.exports = app;