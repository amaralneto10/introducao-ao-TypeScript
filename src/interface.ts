interface usuario {
    id: number
    nome: string
    emial: string
    idade?: number
}

function criarUsuario(usuario: usuario) {
    console.log(`Usuário ${usuario.nome} criado`)
}

criarUsuario({
    id: 1,
    emial: "alunoamaralneto@gmail.com",
    nome: "Amaral"
})

interface produtos {
    id: number
    nome: string
    preco: number
    emEstoque?: boolean
}

function exibirProduto(produtos: produtos) {
    console.log(`
        Seus produtos são
        ID: ${produtos.id}
        nome: ${produtos.nome}
        preco: ${produtos.preco}`)
}

exibirProduto({
    id: 1,
    nome: "Amaral",
    preco: 20
})