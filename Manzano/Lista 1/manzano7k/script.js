let CotacaoDolar, QtdReais, ValorDolares;

CotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar:"));
QtdReais = parseFloat(prompt("Digite a quantidade de reais disponível:"));

ValorDolares = QtdReais / CotacaoDolar;

alert("O valor em dólares é: US$ " + ValorDolares.toFixed(2));