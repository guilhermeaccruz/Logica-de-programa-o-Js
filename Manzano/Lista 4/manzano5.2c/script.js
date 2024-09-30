let num = 1;

console.log("Números divisíveis por 4 menores que 200");

do {
    if (num % 4 === 0) {
        console.log(num);
    }
    num++;
} while (num < 200);