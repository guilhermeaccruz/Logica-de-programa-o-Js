let valor, somatorio, media;
let cont = 1;

console.log("Soma e Média de 10 Valores");
somatorio = 0;

while (cont <= 10) {
    console.log("Digite o valor " + cont + ":");
    valor = parseFloat(prompt("Digite o valor " + cont + ":"));
    somatorio += valor;
    cont++;
}

media = somatorio / 10;

console.log("Total do somatório: " + somatorio);
console.log("Média aritmética: " + media);