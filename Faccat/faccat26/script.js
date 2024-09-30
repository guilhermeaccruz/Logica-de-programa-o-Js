let QuantidadeAtual, QuantidadeMaxima, QuantidadeMinima, media;

QuantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque: "));
QuantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque: "));
QuantidadeMinima = parseFloat(prompt("Digite a quantidade mínima em estoque: "));
media = (QuantidadeMaxima + QuantidadeMinima) / 2;

if (QuantidadeAtual >= media) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}