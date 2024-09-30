let base, expoente, resultado = 1;

console.log("Cálculo de Potência");
base = parseInt(prompt("Digite a base:"));
expoente = parseInt(prompt("Digite o expoente:"));

for (let cont = 0; cont < expoente; cont++) {
    resultado *= base;
}

console.log("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);