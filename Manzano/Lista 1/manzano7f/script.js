let A, B, temp;

A = parseInt(prompt("Digite o valor da variável A:"));
B = parseInt(prompt("Digite o valor da variável B:"));

temp = A;
A = B;
B = temp;

alert("Após a troca:");
alert("Valor de A: " + A);
alert("Valor de B: " + B);