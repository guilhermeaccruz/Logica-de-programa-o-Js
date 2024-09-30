let salario, HorasExtras, porcentagem, ValorHora, ValorExtra, TotalExtra, SalarioFinal;

salario = parseFloat(prompt("Digite seu salário:"));
HorasExtras = parseFloat(prompt("Digite o total de horas extras:"));
ValorHora = salario / 160;
porcentagem = 0.5;

if (HorasExtras > 0) {
    ValorExtra = ValorHora * porcentagem;
    TotalExtra = ValorExtra + ValorHora;
    SalarioFinal = (HorasExtras * TotalExtra) + salario;
    alert(`O total do seu salário é de: R$ ${SalarioFinal.toFixed(2)}`);
} else {
    alert(`O total do salário é de: R$ ${salario.toFixed(2)}`);
}