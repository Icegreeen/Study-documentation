// ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3}

console.log(Object.values(obj)) // um array com os valores
console.log(Object.entries(obj)) // um array de arrays

// Melhorias da notação literal

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

// Uma class é sempre convertida em função

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())

