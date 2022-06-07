//

const pessoa = {
    nome: 'Flávio',
    idade: 21,
    peso: 60
}

// keys | values | entries

console.log(Object.keys(pessoa)) // getting the keys
console.log(Object.values(pessoa)) // getting the values
console.log(Object.entries(pessoa)) // array list 

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// defineProperty 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // can be listed.
    writable: false, // can be rewritten.
    value: '31/05/2000'
})

pessoa.dataNascimento = '01/01/2050'
console.log(pessoa.dataNascimento)

// Object.assing (ECMAScript 2015)

// concatenar objetos em um só.

const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)



