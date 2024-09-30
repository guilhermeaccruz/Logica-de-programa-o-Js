let comprimento, largura, altura, volume;

comprimento = parseFloat(prompt("Digite o valor do comprimento da caixa:"));
largura = parseFloat(prompt("Digite o valor da largura da caixa:"));
altura = parseFloat(prompt("Digite o valor da altura da caixa:"));

volume = comprimento * largura * altura;

alert("O volume da caixa retangular é: " + volume.toFixed(2) + " metros cúbicos.");