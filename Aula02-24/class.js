class Veiculo {
    // Atributos (características)
    modelo = "SUV";
    marca = "Honda - HRV";
    ano = 2025;

    //metodos ou ações
    dirigir(){
        console.log("O carro começou a se mover");
    }
    parar(){
        console.log("O carro parou");
    }
}

//Instanciar ou criar o objeto
const carro = new Veiculo();
console.log(typeof carro);
console.log(carro);
carro.dirigir();
carro.parar();