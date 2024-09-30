let qtdMacas, custoTotal;

qtdMacas = prompt("Digite o número de maçãs compradas:");

if (qtdMacas >= 12) {
    custoTotal = qtdMacas * 1.00;
} else {
    custoTotal = qtdMacas * 1.30;
}

alert(`O custo total da compra é de: R$ ${custoTotal.toFixed(2)}`);