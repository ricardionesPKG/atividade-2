// Função para determinar o maior número entre três valores
function encontrarMaiorNumero(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Obter entrada do usuário
var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Chamar a função para encontrar o maior número
var maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);

// Exibir o resultado em um alert
alert("O maior número entre " + numero1 + ", " + numero2 + " e " + numero3 + " é: " + maiorNumero);