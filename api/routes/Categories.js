const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    return res.status(200).json(savedCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Catgeory.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
