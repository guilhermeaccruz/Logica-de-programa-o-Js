let avaliacao1, avaliacao2, media;

avaliacao1 = prompt("Digite a nota da primeira avaliação:");
avaliacao2 = prompt("Digite a nota da segunda avaliação:");

media = (parseFloat(avaliacao1) + parseFloat(avaliacao2)) / 2;

if (media >= 6) {
    alert("Aluno aprovado");
} else {
    alert("Aluno reprovado");
}