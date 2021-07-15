// Funções anônimas 

// Exemplo 1
const soma = function (x, y) {
    return x + y
}

// Exemplo 2

const imprimirResultado = function(a, b, operacao = soma ) {
    console.log(operacao(a, b))
}

imprimirResultado(5, 4) // 9
imprimirResultado(5, 4, soma)

// Exemplo 3

imprimirResultado(5, 4, function (x, y) {
    return x - y
})

// Exemplo 4
imprimirResultado(5, 4, (x, y) => x * y)

// Exemplo 5

// Função anônima dentro de um contexto de objeto:

const pessoa = {
    falar: function () {
        console.log('Estou aqui!')
    }
}

pessoa.falar()