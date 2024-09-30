let tempo, velocidade, distancia, LitrosUsados;

tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em Km):"));

distancia = tempo * velocidade;
LitrosUsados = distancia / 12;

alert("Velocidade média: " + velocidade + " Km/h");
alert("Tempo gasto na viagem: " + tempo + " horas");
alert("Distância percorrida: " + distancia + " Km");
alert("Quantidade de litros de combustível utilizada: " + LitrosUsados + " litros");