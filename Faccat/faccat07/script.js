let idade, meses, dia, TotalDias;

idade = prompt("Digite sua idade:");
meses = prompt("Digite quantos meses se passaram desde seu último aniversário:");
dia = prompt("Escreva em que dia você está:");

TotalDias = idade * 365 + meses * 30 + dia;

alert(`O total de dias vividos é: ${TotalDias}`);