class Caneta{
    cor = 'Amarela';
    marca = 'Faber Castell';
    Ponta = 'fina';
    qntdetinta = 10; //ml
    tampa = false;

    escrever(){
        this.qntdetinta -= 1;
        return 'Comecei a escrever';
    }

    getqtndetinta(){
        return this.qntdetinta; 
    }

    sublinhar(valor){
        this.qntdetinta -= 2;
        if (this.qntdetinta < 2){
            return 'Texto não é possivel de ser sublinhado';
        } else if (this.qntdetinta >= 2) {
            return 'Texto sublinhado';
        }
    }

    recarregar(valor){
        if (this.qntdetinta + valor > 15) {
            return 'Não é possível recarregar a caneta, a quantidade de tinta ultrapassaria o limite';
        } else if (this.qntdetinta <= 15) {
            this.qntdetinta += valor;
            return 'A caneta foi recarregada';
        }

    }
}

const canetafina = new Caneta();
canetafina.escrever();
canetafina.escrever();
canetafina.sublinhar();
console.log('A quantidade de tinta é: ' + canetafina.getqtndetinta());