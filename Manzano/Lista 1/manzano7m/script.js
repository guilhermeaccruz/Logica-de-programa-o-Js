let A, B, C, QuadradoSoma;

A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));

QuadradoSoma = (A + B + C) * (A + B + C);

alert("O quadrado da soma dos três valores é: " + QuadradoSoma.toFixed(2));