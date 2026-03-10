class jogador {
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }
    getnome() {
        return this.#nome;
    }
    getnumero() {
        return this.#numero;
    }
}

class jogadorDeFutebol extends jogador {
    pedominante;
    totalGols;

    constructor(nome, numero, pedominante, totalGols) {
        super(nome, numero);
        this.pedominante = pedominante;
        this.totalGols = totalGols;
    }

    fazerGol(qtd){
        this.totalGols += qtd;
    }

    mostrar() {
        return 'O jogador ' + this.getnome() + ' camisa número ' + this.getnumero() + ', tem o pé dominante ' + this.totalGols + ' gols.';
}
} 
const jorge = new jogadorDeFutebol('Jorge', 10, 'direito', 10);
jorge.fazerGol(10);
console.log(jorge.mostrar());