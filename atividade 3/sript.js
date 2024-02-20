//Faça um programa que verifica se uma senha armazenada na variável SENHA é válida. A senha é válida se tiver pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número.

var SENHA = prompt ("Exemplo123");

function verificarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }

    var temMaiuscula = /[A-Z]/.test(senha);
    var temMinuscula = /[a-z]/.test(senha);
    var temNumero = /\d/.test(senha);

    return temMaiuscula && temMinuscula && temNumero;
}





if (verificarSenha(SENHA)) {
    alert("Senha válida!");
} else {
    alert("Senha inválida! A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");
}