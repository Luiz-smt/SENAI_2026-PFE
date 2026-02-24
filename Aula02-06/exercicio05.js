const prompt = require('prompt-sync')();

let dataAtual = new Date();
let anodenascimento = prompt('Digite o seu ano de nascimento: ');
let idade = dataAtual.getFullYear() - anodenascimento;
console.log('Sua idade é: ' + idade);