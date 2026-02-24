const prompt = require('prompt-sync')();

function calcularNotaFinal(){
let Aluno = prompt(Number('Digite a nota do primeiro aluno: '));

Aluno = Aluno/2
Aluno = Aluno**2

console.log('A nota final do aluno é: ' + Aluno);
}

calcularNotaFinal();