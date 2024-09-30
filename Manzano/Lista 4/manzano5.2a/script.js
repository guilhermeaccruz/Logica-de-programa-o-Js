let num = 15;
let quadrado;

console.log("Quadrados dos números inteiros de 15 a 200");

do {
    quadrado = num * num;
    console.log("O quadrado de " + num + " é: " + quadrado);
    num++;
} while (num <= 200);

console.log("Fim do programa");