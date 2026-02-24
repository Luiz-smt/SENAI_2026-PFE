class Pessoa{
    nome
    #cpf
    #salario

    setCPF(valor){
        this.#cpf = valor;
    }
    getcpf(){
        return this.#cpf;
    }
    setsalario(valor){
        this.#salario = valor;
    }
    getsalario(){
        return this.#salario;
    }
}

const sanches = new Pessoa();
sanches.nome = "Sanches";
sanches.setCPF(33333333332);
console.log(sanches.getcpf());
sanches.setsalario (5000);
console.log(sanches.getsalario());
console.log(sanches);