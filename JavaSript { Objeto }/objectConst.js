// pessoa -> 123 -> {...}

const pessoa = {nome: 'Flávio'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} // error

Object.freeze(pessoa) // congelando objeto

pessoa.nome = 'Mario'
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // Objeto constante