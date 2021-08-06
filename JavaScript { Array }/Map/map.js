// Map

const nums = [ 1, 2, 3, 4, 5]

// O map é um For com propósito

// Ele gera um novo array, não alterando a original

let resultado = nums.map(function(e) {
    return e * 2
});

console.log(resultado);

// 3 funções que vamo passar como callback para a função map!

const soma10 = e => e + 10 // Recebo o elemento o soma 10.
const triplo = e => e * 3 // Recebo o elemento o multiplica por 3.

// Recebo o elemento e o converto para real, colocando duas casa decimais(2) e substituindo o ponto por virgula.
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado)