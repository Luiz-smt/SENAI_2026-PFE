class cidade {
    quantidadeHabitantes = "27.983";
    estado = "São Paulo";
    nome = "Mirandopolis";

    mostrardados(){
        console.log(this.quantidadeHabitantes);
        console.log(this.estado)
        console.log(this.nome)
    }
}
const cidade1 = new cidade();
cidade1.mostrardados();