function contaTotal() {
  let valorTotal = 0;
  let compras = 0;
  const dezporcento = 10;
  const quinzeporcento = 15;
  let frase = "";
  do {
    compras = parseFloat(prompt("Digite o valor total da sua compra!"));
    valorTotal = compras;
    console.log(compras);

    if (compras > 200) {
      valorTotal = compras - (compras * quinzeporcento) / 100;
      frase += `O seu desconto foi de ${quinzeporcento}%. `;
    } else if (compras > 100) {
      valorTotal = compras - (compras * dezporcento) / 100;
      frase += `O seu desconto foi de ${dezporcento}%. `;
    }
  } while (isNaN(compras));
  // insere na div a frase "O seu desconto foi de X%. O valor da sua compra ficou em R$X"
  const total = document.getElementById("totaldesconto");
  total.innerHTML = `${frase}O valor da sua compra ficou em R$${valorTotal}`;
}
