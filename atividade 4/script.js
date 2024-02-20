// Crie um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 - Domingo, 2 - Segunda, ..., 7 - Sábado).
function obterDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Insira um número de 1 a 7.";
    }
}

var numeroDigitado = prompt("Digite um número de 1 a 7:");

var numeroInteiro = parseInt(numeroDigitado);

alert(obterDiaDaSemana(numeroInteiro));