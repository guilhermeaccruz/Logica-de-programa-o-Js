let somatorio = 0;

for (let i = 1; i <= 15; i++) {
    let num = parseInt(prompt("Digite um número: "), 10);
    let fatorial = 1;

    for (let j = 1; j <= num; j++) {
        fatorial *= j;
    }

    somatorio += fatorial;
    console.log("Fatorial de " + num + " é: " + fatorial);
}

console.log("O somatório dos fatoriais é: " + somatorio);