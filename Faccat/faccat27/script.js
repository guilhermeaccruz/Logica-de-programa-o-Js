let numero;

numero = parseFloat(prompt("Digite um número:"));

if (numero < 0) {
    alert("O valor digitado é negativo");
} else if (numero > 0) {
    alert("O valor digitado é positivo");
} else {
    alert("O valor digitado é zero");
}