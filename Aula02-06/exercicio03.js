const prompt = require('prompt-sync')();

let crachá = prompt('Tem crachá? (s/n): ');
let uniforme = prompt('Está uniformizado? (s/n): ');
let monitor = prompt('É monitor? (s/n): ');
let cadastroprevio = prompt('Possui cadastro prévio? (s/n): ');

if (crachá == 's' && uniforme == 's' && cadastroprevio == 's') {
    console.log('Acesso permitido');
} else if (monitor == 's' && cadastroprevio == 's') {
    console.log('Acesso permitido');
} else {
    console.log('Acesso negado');
}