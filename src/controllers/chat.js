const express = require("express");
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get("/chat", async (req, res) => {
  res.send("Ola");
});

module.exports = (app) => app.use("/", router);
