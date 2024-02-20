function verificarParOuImpar(numero) {
    if(numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}
var numero = prompt("Digite um número:");

numero = parseInt(numero);
if(isNaN(numero)) {
    alert("Por favor, insira um número válido.");
} else {
    var resultado = verificarParOuImpar(numero);    
    alert(resultado);
}
