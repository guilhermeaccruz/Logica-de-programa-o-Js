let nota1, nota2, nota3, exercicio, media;

nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
nota3 = parseFloat(prompt("Digite a nota da terceira avaliação:"));
exercicio = parseFloat(prompt("Digite a média dos exercícios:"));
media = (nota1 + nota2 * 2 + nota3 * 3 + exercicio) / 7;

if (media >= 9.0) {
    alert(media.toFixed(2) + " conceito: A");
} else if (media >= 7.5) {
    alert(media.toFixed(2) + " conceito: B");
} else if (media >= 6.0) {
    alert(media.toFixed(2) + " conceito: C");
} else {
    alert(media.toFixed(2) + " conceito: D");
}