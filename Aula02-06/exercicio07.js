const prompt = require('prompt-sync')();
const numero = parseFloat(prompt("Digite um número com casas decimais: "));
const arredondado = Math.round(numero);
console.log("O número arredondado é: " + arredondado);