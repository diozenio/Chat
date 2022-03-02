const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", { text: "Hey" });
});

app.get("/register", (req, res) => {
  res.render(__dirname + "/views/register.ejs/");
});

require("./controllers/register")(app);
require("./controllers/login")(app);

io.on("connection", (client) => {
  client.on("message", (mensagem) => {
    console.log(message);
    client.emit("message", "Olá cliente, aqui é o servidor!");
  });
});

http.listen(3000, () => {
  console.log("Servidor sendo executado em: http://localhost:3000/");
});
