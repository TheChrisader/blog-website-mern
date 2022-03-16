const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./routes/Auth");
const userRoute = require("./routes/Users");
const postRoute = require("./routes/Posts");
const categoryRoute = require("./routes/Categories");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.png");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Connected to server`);
});
