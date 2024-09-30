let numero1, numero2, numero3;

numero1 = parseInt(prompt("Digite um número:"));
numero2 = parseInt(prompt("Digite um número:"));
numero3 = parseInt(prompt("Digite um número:"));

if (numero1 >= numero2 && numero1 >= numero3) {
    alert(`O maior número é: ${numero1}`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    alert(`O maior número é: ${numero2}`);
} else {
    alert(`O maior número é: ${numero3}`);
}