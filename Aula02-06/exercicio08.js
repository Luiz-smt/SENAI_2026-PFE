const prompt = require('prompt-sync')();

let numero = prompt("Digite um numero aleatorio:")
let numeroaleatorio = Math.random() * 10;
let numeroarredondado = Math.round(numeroaleatorio);
if (numero == numeroarredondado){
    console.log("Você acertou o numero aleatorio que é: " + numeroarredondado);
} else {
    console.log("Você errou o numero aleatorio que é: " + numeroarredondado);
}