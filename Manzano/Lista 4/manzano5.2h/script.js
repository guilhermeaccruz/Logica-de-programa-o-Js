let areaTotal = 0;
let continuar = "SIM";

console.log("Cálculo da Área Total da Residência");

while (continuar === "SIM") {
    let nomeComodo = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do " + nomeComodo + " (em metros):"));
    let comprimento = parseFloat(prompt("Digite o comprimento do " + nomeComodo + " (em metros):"));
    
    let area = largura * comprimento;
    console.log("A área do " + nomeComodo + " é: " + area.toFixed(2) + " metros quadrados");
    
    areaTotal += area;

    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)").toUpperCase();
}

console.log("A área total da residência é: " + areaTotal.toFixed(2) + " metros quadrados");
