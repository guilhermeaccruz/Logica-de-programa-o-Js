let nome, sexo;
let altura, peso_ideal;

nome = prompt("Digite seu nome:");
sexo = prompt("Digite seu sexo (sendo M para masculino e F para feminino):");
altura = parseFloat(prompt("Digite sua altura:"));

if (sexo === "M") {
    peso_ideal = (72.8 * altura) - 58;
    alert(`Seu peso ideal é: ${peso_ideal.toFixed(2)} kg`);
} else {
    peso_ideal = (62.1 * altura) - 44.7;
    alert(`Seu peso ideal é: ${peso_ideal.toFixed(2)} kg`);
}