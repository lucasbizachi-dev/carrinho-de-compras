class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }

    formatarDinheiro(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

class Item {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

let carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem(new Item('Livro', 20));
carrinho.adicionarItem(new Item('Caneta', 3));
carrinho.adicionarItem(new Item('Lápis', 2));
carrinho.adicionarItem(new Item('Caderno', 12));
let total = carrinho.calcularTotal();
console.log("Total da compra: ", carrinho.formatarDinheiro(total));
