let num = 2;
let soma = 0;

console.log("Somatório dos valores pares de 1 a 500");

do {
    soma += num;
    num += 2;
} while (num <= 500);

console.log("O somatório dos valores pares de 1 a 500 é: " + soma);