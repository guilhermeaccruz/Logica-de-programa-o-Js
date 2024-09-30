let contador = 1;
let soma = 0;

while (contador <= 500) {
    if (contador % 2 === 0) {
        soma += contador;
    }
    contador++;
}

console.log("A soma dos valores pares de 1 a 500 é: " + soma);