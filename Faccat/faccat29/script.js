let numero1, numero2, numero3, maior1, maior2, maior3;

numero1 = parseInt(prompt("Digite o primeiro número:"));
numero2 = parseInt(prompt("Digite o segundo número:"));
numero3 = parseInt(prompt("Digite o terceiro número:"));

if (numero1 > numero2 && numero1 > numero3) {
    maior1 = numero1;
    if (numero2 > numero3) {
        maior2 = numero2;
        maior3 = numero3;
    } else {
        maior2 = numero3;
        maior3 = numero2;
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    maior1 = numero2;
    if (numero1 > numero3) {
        maior2 = numero1;
        maior3 = numero3;
    } else {
        maior2 = numero3;
        maior3 = numero1;
    }
} else {
    maior1 = numero3;
    if (numero1 > numero2) {
        maior2 = numero1;
        maior3 = numero2;
    } else {
        maior2 = numero2;
        maior3 = numero1;
    }
}

alert(`Os números em ordem crescente são: ${maior3}, ${maior2}, ${maior1}`);