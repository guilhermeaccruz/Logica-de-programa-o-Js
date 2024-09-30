let somatorio = 0;
let totalValores = 0;
let num;

do {
    num = parseInt(prompt("Digite um valor (ou um número negativo para encerrar): "), 10);
    if (num >= 0) {
        somatorio += num;
        totalValores++;
    }
} while (num >= 0);

if (totalValores > 0) {
    let media = somatorio / totalValores;
    console.log("Total do somatório: " + somatorio);
    console.log("Média aritmética: " + media.toFixed(2));
    console.log("Total de valores lidos: " + totalValores);
} else {
    console.log("Nenhum valor positivo foi informado.");
}