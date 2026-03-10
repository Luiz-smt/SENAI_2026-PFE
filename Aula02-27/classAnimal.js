class Animal {
    especie;
    #sexo;
    #qntddeIndividuos;
    #nome;

    constructor(especie, sexo, qntddeIndividuos, nome) {
        this.especie = especie;
        this.#sexo = sexo;
        this.#qntddeIndividuos = qntd;
        this.#nome = nome;
    }

    mostrar() {
        console.log('Espécie: ' + this.especie);
        console.log('Sexo: ' + this.#sexo);
        console.log('Quantidade de indivíduos: ' + this.#qntddeIndividuos);
        console.log('Nome: ' + this.#nome);
    }
}

const panda = new Animal("Panda", "Fêmea", 2, "Lili");
panda.mostrar();