const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const router = express.Router();

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...others } = updatedUser._doc;
      return res.status(200).json(others);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  } else {
    return res.status(401).json("You can ony update your own account");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      await Post.deleteMany({ username: user.username });
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(400).json("User deleted...");
      } catch (err) {
        res.status(500).json(err.message);
      }
    } catch (err) {
      res.status(404).json("User does not exist");
    }
  } else {
    return res.status(401).json("You can ony delete your own account");
  }
});

// GET
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
