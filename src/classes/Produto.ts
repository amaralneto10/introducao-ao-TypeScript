class Produto {
    // Atributos
    nome: String
    preco: number
    estoque: number

    constructor(nome: String, preco: number, estoque: number) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    comprar(qtd:number): number {
        this.estoque = this.estoque - qtd
        return this.estoque // Estoque atualizado
    }

    repor(qtd: number): number {
        this.estoque = this.estoque + qtd
        return this.estoque // Estoque atualizado
    }

}

const paes = new Produto("Pão", 1, 10)

console.log(`Comprando 2 paes. Estoque atual ${paes.comprar(2)}`)

console.log(`Repondo 6 paes. Estoque atual ${paes.repor(6)}`)
