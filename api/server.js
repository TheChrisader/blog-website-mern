const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Connected to server`);
});
