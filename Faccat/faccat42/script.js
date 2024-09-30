let codigo, AnoNascimento, AnoIngresso, AnoTrabalho, idade;

codigo = parseInt(prompt("Digite seu código de empregado:"));
AnoNascimento = parseInt(prompt("Digite sua data de nascimento:"));
AnoIngresso = parseInt(prompt("Digite seu ano de ingresso na empresa:"));
AnoTrabalho = 2024 - AnoIngresso;
idade = 2024 - AnoNascimento;

if (idade >= 65) {
    alert("Idade: " + idade + ", tempo trabalhado: " + AnoTrabalho + ", Requerer aposentadoria");
} else if (AnoTrabalho >= 30) {
    alert("Idade: " + idade + ", tempo trabalhado: " + AnoTrabalho + ", Requerer aposentadoria");
} else if (idade >= 60 && AnoTrabalho >= 25) {
    alert("Idade: " + idade + ", tempo trabalhado: " + AnoTrabalho + ", Requerer aposentadoria");
} else {
    alert("Idade: " + idade + ", tempo trabalhado: " + AnoTrabalho + ", Não requerer");
}
