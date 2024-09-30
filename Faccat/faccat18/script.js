let AnoAtual, AnoNascimento, idade;

AnoAtual = prompt("Digite o ano atual:");
AnoNascimento = prompt("Digite o ano de nascimento:");

idade = AnoAtual - AnoNascimento;

if (idade >= 16) {
    alert("Você pode votar esse ano.");
} else {
    alert("Você não pode votar esse ano.");
}