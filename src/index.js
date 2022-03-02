const express = require("express");

const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Login/");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/Register/");
});

require("./controllers/register")(app);
require("./controllers/login")(app);

server.listen(3000, () => {
  console.log("Servidor sendo executado em: http://localhost:3000/");
});
