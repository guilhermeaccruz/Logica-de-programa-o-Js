let saldo, conta, debito, credito, SaldoAtual;

conta = prompt("Digite o número da conta: ");
saldo = parseFloat(prompt("Digite o saldo atual da conta: "));
debito = parseFloat(prompt("Digite o valor de débito: "));
credito = parseFloat(prompt("Digite o valor de crédito: "));
SaldoAtual = saldo - debito + credito;

if (SaldoAtual < 0) {
    alert(`Saldo Negativo é de: R$ ${SaldoAtual.toFixed(2)}`);
} else {
    alert(`Saldo Positivo é de: R$ ${SaldoAtual.toFixed(2)}`);
}