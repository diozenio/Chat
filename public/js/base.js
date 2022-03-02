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
