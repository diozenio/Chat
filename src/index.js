const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Login/");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/Register/");
});

require("./controllers/register")(app);
require("./controllers/login")(app);

http.listen(3000, () => {
  console.log("Servidor sendo executado em: http://localhost:3000/");
});
