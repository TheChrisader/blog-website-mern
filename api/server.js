const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 8000;

app.listen(PORT || 8000, () => {
  console.log(`Connected to server`);
});
