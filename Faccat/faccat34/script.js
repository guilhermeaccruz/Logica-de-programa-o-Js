let x, y, z;
let resposta;

x = parseFloat(prompt("Digite o valor de X: "))
y = parseFloat(prompt("Digite o valor de Y: "))
z = (x * y) + 5

if (z <= 0) {
    resposta = "A";
} else if (z <= 100) {
    resposta = "B"
} else {
    resposta = "C"
}

alert(`O valor de Z é: ${z}`)
alert(`A resposta é: ${resposta}`)