let valor1, valor2;

valor1 = prompt("Digite o primeiro valor:");
valor2 = prompt("Digite o segundo valor:");

if (valor1 < valor2) {
    alert(`${valor1}, ${valor2}`);
} else {
    alert(`${valor2}, ${valor1}`);
}