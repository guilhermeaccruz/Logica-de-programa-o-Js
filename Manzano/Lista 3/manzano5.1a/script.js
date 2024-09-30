let numero = parseInt(prompt("Digite um número:"));
let contador = 1;
let resultado;

while (contador <= 10) {
    resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
    contador++;
}