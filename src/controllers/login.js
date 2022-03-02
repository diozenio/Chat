const express = require("express");
const bcrypt = require('bcryptjs');

const User = require("../models/user");

const router = express.Router();

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  if(!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: "Invalid password" });
  }

  res.send("Olá " + user.username);
});

module.exports = (app) => app.use("/", router);