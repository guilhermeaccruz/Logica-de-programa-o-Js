let CotacaoDolar, QtdDolares, ValorReais;

CotacaoDolar = parseFloat(prompt("Digite o valor da cotação do dólar:"));
QtdDolares = parseFloat(prompt("Digite a quantidade de dólares disponível:"));

ValorReais = QtdDolares * CotacaoDolar;

alert("O valor em reais é: R$ " + ValorReais.toFixed(2));