let raio, altura, volume;
const pi = 3.14159;

raio = parseFloat(prompt("Digite o valor do raio da lata de óleo:"));
altura = parseFloat(prompt("Digite o valor da altura da lata de óleo:"));
volume = pi * (raio ** 2) * altura;
alert("O volume da lata de óleo é: " + volume + " unidades cúbicas");