function contagemRegressiva() {
  let numeroInicial = prompt("Digite um número"); // 80
  const cont = document.getElementById("contagem");

  while (numeroInicial > 1) {
    var li = document.createElement("li");
    li.innerHTML = numeroInicial;
    cont.appendChild(li);
    numeroInicial--; // numeroInicial = 79
  }

  var li = document.createElement("li");
  li.innerHTML = 'Contagem Finalizada';
  cont.appendChild(li);
}
