let numero, maior, menor;

console.log("Leitura de valores positivos e negativos:");
numero = parseFloat(prompt("Digite um número:"));

if (numero >= 0) {
    maior = numero;
    menor = numero;
} else {
    menor = numero;
}

while (numero >= 0) {
    numero = parseFloat(prompt("Digite um número:"));

    if (numero > maior) {
        maior = numero;
    } else if (numero < menor) {
        menor = numero;
    }
}

console.log("");
console.log("O maior número digitado foi: " + maior);
console.log("O menor número digitado foi: " + menor);