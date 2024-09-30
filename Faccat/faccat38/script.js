let usuario, senha;

usuario = parseInt(prompt("Digite o código do usuário: "));
if (usuario !== 1234) {
    alert("Usuário inválido!");
} else {
    senha = parseInt(prompt("Digite a senha: "));
    if (senha === 9999) {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
}