let HoraInicio, HoraFim, duracao;

HoraInicio = parseInt(prompt("Digite o horário de início do jogo (sem incluir os minutos):"));
HoraFim = parseInt(prompt("Digite o horário do fim do jogo (sem incluir os minutos):"));

if (HoraFim >= HoraInicio) {
    duracao = HoraFim - HoraInicio;
} else {
    duracao = 24 - HoraInicio + HoraFim;
}

alert(`A duração do jogo foi de ${duracao} horas.`);