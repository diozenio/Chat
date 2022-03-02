var getNome = function () {
  var nome;

  while (true) {
    nome = prompt("Digite o seu nome: ");

    if (nome != null && nome.length > 0) {
      break;
    }
  }

  return nome;
};

var nome = getNome();

var socket = io();

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value, nome);
    input.value = "";
  }
});

socket.on("chat message", function (msg, author) {
  var item = document.createElement("li");
  item.textContent = author + " enviou: " + msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
