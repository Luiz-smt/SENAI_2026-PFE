const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite sua idade: '));

if (idade >= 16 || idade > 18) {
    console.log('Você tem a idade sucificiente para pegar livros emprestados');
} else {
    console.log("O usuario não tem a idade suficiente para pegar livros emprestados");
}