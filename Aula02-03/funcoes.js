//primeiro tipo função padrão
function saudacao(nome, sobrenome) {
    console.log('Olá, seja bem vindo!' + nome + ' ' + sobrenome);
}
saudacao('Luiz', 'Otávio'); // chamada da função

//segundo tipo - função com anonima
const somar = function (num1, num2) {
    console.log('A soma dos numeros é: ' + (num1 + num2));
}
somar(25, 35);

//terceiro tipo - função de seta
const subtrair = (num1, num2) => {
    console.log('A subtração dos numeros é: ' + (num1 - num2));
}
subtrair(30, 50);

const subtraircomretorno = (num1, num2) => {
    return num1 - num2;
}
subtraircomretorno(30, 50);

