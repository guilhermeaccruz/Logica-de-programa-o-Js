let time1, time2;
let gols1, gols2;

time1 = prompt("Digite o nome do primeiro time:");
time2 = prompt("Digite o nome do segundo time:");
gols1 = parseInt(prompt("Gols marcados pelo primeiro time:"));
gols2 = parseInt(prompt("Gols marcados pelo segundo time:"));

if (gols1 > gols2) {
    alert(`O vencedor é o time: ${time1}`);
} else if (gols2 > gols1) {
    alert(`O vencedor é o time: ${time2}`);
} else {
    alert("EMPATE");
}