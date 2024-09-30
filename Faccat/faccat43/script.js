let a, b, c, mens;

a = parseFloat(prompt("Digite o valor do lado a:"));
b = parseFloat(prompt("Digite o valor do lado b:"));
c = parseFloat(prompt("Digite o valor do lado c:"));

if ((a + b > c) && (b + c > a) && (a + c > b)) {
    if (a === b && b === c) {
        mens = "Triângulo Equilátero";
    } else if (a === b || b === c || a === c) {
        mens = "Triângulo Isósceles";
    } else {
        mens = "Triângulo Escaleno";
    }
} else {
    mens = "Não é possível formar um triângulo";
}

alert(mens);
