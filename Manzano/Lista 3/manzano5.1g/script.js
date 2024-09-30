let termoAtual, termoAnterior1 = 1, termoAnterior2 = 1;

console.log("Série de Fibonacci até o 15º termo");
console.log(termoAnterior1);
console.log(termoAnterior2);

for (let cont = 3; cont <= 15; cont++) {
    termoAtual = termoAnterior1 + termoAnterior2;
    console.log(termoAtual);
    termoAnterior1 = termoAnterior2;
    termoAnterior2 = termoAtual;
}