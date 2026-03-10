class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;

        if (preco >= 0 && estoque >= 0) {
            this.preco = preco;
            this.estoque = estoque;
        } else {
            console.log(`Erro: Valores inválidos para o produto "${nome}".`);
        }
    }

    aplicarDesconto(percentual) {
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
        console.log(`Desconto de ${percentual}% aplicado em ${this.nome}. Novo preço: R$ ${this.preco.toFixed(2)}`);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const pente = new Produto ('Pente',10,20);
const sabonete = new Produto('Dove',30,20);
pente.aplicarDesconto(20);
console.log(pente.valorEmEstoque());
sabonete.aplicarDesconto(20);
console.log(sabonete.valorEmEstoque());