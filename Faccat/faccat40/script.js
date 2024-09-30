let nome;
let quantidade;
let preco, desconto, total, TotalPagar;

nome = prompt("Digite o nome do produto:");
quantidade = parseInt(prompt("Digite a quantidade:"));
preco = parseFloat(prompt("Digite o valor unitário:"));
total = quantidade * preco;

if (quantidade <= 5) {
    desconto = (total / 100) * 2;
    TotalPagar = total - desconto;
    alert("O valor total a pagar é de R$: " + TotalPagar.toFixed(2));
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = (total / 100) * 3;
    TotalPagar = total - desconto;
    alert("O valor total a pagar é de R$: " + TotalPagar.toFixed(2));
} else {
    desconto = (total / 100) * 5;
    TotalPagar = total - desconto;
    alert("O valor total a pagar é de R$: " + TotalPagar.toFixed(2));
}