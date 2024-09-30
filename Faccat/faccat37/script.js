let KgMorango, KgMaca;
let PrecoMorango, PrecoMaca, total, desconto;

KgMorango = parseFloat(prompt("Digite a quantidade de morangos (em kg): "));
KgMaca = parseFloat(prompt("Digite a quantidade de maçãs (em kg): "));

if (KgMorango <= 5) {
    PrecoMorango = 2.50;
} else {
    PrecoMorango = 2.20;
}

if (KgMaca <= 5) {
    PrecoMaca = 1.80;
} else {
    PrecoMaca = 1.50;
}

total = (KgMorango * PrecoMorango) + (KgMaca * PrecoMaca);

if ((KgMorango + KgMaca > 8) || (total > 25.00)) {
    desconto = total * 0.10;
    total -= desconto;
}

alert(`O valor total a ser pago é: R$ ${total.toFixed(2)}`);