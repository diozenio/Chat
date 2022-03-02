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

// app.get("/chat", (req, res) => {
//   res.render(__dirname + "/views/chat.ejs/");
// });

require("./controllers/register")(app);
require("./controllers/login")(app);
require("./controllers/chat")(app);

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.nome}`);
  socket.on('chat message', (msg, author) => {
    io.emit('chat message', msg, author);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3000, () => {
  console.log("Servidor sendo executado em: http://localhost:3000/");
});
