// Escreva um programa que recebe o nome de um mês e imprime o número de dias daquele mês. Considere um ano não bissexto.
function obterNumeroDiasNoMes(nomeMes) {
    var mes = nomeMes.toLowerCase();

    var diasPorMes = {
        janeiro: 31,
        fevereiro: 28,
        marco: 31,
        abril: 30,
        maio: 31,
        junho: 30,
        julho: 31,
        agosto: 31,
        setembro: 30,
        outubro: 31,
        novembro: 30,
        dezembro: 31
    };

    if (diasPorMes.hasOwnProperty(mes)) {
        var numeroDias = diasPorMes[mes];
        alert("O mês de " + nomeMes + " tem " + numeroDias + " dias.");
    } else {
        alert("Por favor, insira um nome de mês válido.");
    }
}

var nomeMes = prompt("Digite o nome do mês:");
obterNumeroDiasNoMes(nomeMes);