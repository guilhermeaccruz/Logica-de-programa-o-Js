let SM, PR, NS;

SM = parseFloat(prompt("Digite o valor do salário mensal:"));
PR = parseFloat(prompt("Digite o valor do percentual de reajuste:"));

NS = SM + (SM * PR / 100);
alert("O valor do novo salário é: R$ " + NS.toFixed(2));