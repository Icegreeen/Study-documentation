// Função sem retorno 

function imprimirSoma (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // aqui a função é chamada

// Função com retorno

function soma(a, b = 0) {
    return a + b 
}

console.log(soma(2, 3)); // 5

//---------------------------------------------------------

// Armazenando uma função em uma variável

const imprimirSoma = function (a , b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável

const soma = (a, b) => { // Neste caso o '=>' substitui a palavra reservada 'function'

    return a + b
}

console.log(soma(5, 10));

// Função arrow com retorno implícito 

const subtracao = (a, b) => a - b
console.log(subtracao(4, 5));