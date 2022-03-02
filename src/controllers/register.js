const express = require("express");
const bcrypt = require('bcryptjs');

const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "User already exists" });
    }
    const user = await User.create(req.body);

    user.password = undefined;

    return res.redirect('/');
  } catch (err) {
    return res.status(400).send({ error: "Resgistration failed" });
  }
});


module.exports = (app) => app.use("/", router);
