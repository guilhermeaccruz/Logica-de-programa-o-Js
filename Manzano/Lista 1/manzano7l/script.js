let A, B, C, SomaQuadrados;

A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));

SomaQuadrados = (A * A) + (B * B) + (C * C);

alert("A soma dos quadrados dos três valores é: " + SomaQuadrados.toFixed(2));