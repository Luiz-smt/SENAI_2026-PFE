    let prompt = require('prompt-sync')();

    let numer1;
    let numer2;

    console.log(
        numer1 = Number(prompt('Digite o 1° número:')),
        numer2 = Number(prompt('Digite o 2° número: '))
    );

    let soma= numer1+numer2;
    let sub=numer1-numer2;
    let divisao = numer1/numer2;
    let mult = numer1*numer2;

    console.log('A SOMA é:'+ soma);
    console.log('A SUBTRAÇÃO é:'+ sub);
    console.log('A DIVISÃO é:'+ divisao);
    console.log('A MULTIPLICACAO é:'+ mult);