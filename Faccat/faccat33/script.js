let numero1, numero2;

numero1 = parseFloat(prompt("Digite um valor:"));
numero2 = parseFloat(prompt("Digite um valor:"));

if (numero1 === numero2) {
    alert("Números iguais");
} else if (numero1 > numero2) {
    alert("Primeiro é maior");
} else {
    alert("Segundo é maior");
}