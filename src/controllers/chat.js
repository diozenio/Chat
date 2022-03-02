const express = require("express");

const router = express.Router();

router.get("/chat", async (req, res) => {
  res.send("Ola");
});

module.exports = (app) => app.use("/", router);
