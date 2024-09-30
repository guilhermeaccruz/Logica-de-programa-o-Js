let soma, media;
let cont, quantidade;

console.log("Soma e Média dos Números Pares entre 50 e 70");
soma = 0;
quantidade = 0;
cont = 50;

while (cont <= 70) {
    if (cont % 2 === 0) {
        soma += cont;
        quantidade++;
    }
    cont++;
}

if (quantidade > 0) {
    media = soma / quantidade;
    console.log("Total da soma: " + soma);
    console.log("Média aritmética: " + media);
} else {
    console.log("Não foram encontrados números pares na faixa de 50 a 70.");
}