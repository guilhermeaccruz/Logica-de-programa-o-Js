let quadro = 1;
let graos = 1;
let somatorio = 0;

console.log("Somatório de Grãos de Trigo no Tabuleiro de Xadrez");

while (quadro <= 64) {
    somatorio += graos;
    console.log("Quadro: " + quadro + " - Grãos no quadro: " + graos);
    graos *= 2;
    quadro++;
}

console.log("Total de grãos no tabuleiro: " + somatorio);