//

// Cada objeto tem uma propriedade interna chamada protótipo, que se vincula a outro objeto. 
// O objeto protótipo tem um protótipo de objeto próprio, e assim por diante. Se você seguir
// a cadeia de protótipo de um objeto, você finalmente alcançará Object -protótipo principal cujo protótipo é null-, sinalizando o fim da cadeia.

// Em JavaScript, objetos herdam de outros objetos: Object.prototype

// E todo objeto tem um protótipo: [[ Prototype ]]

// 1) __proto__

const homem = {
    sexo: 'masculino'
}

const joao = {
    nome: "João",
    idade: 20,
    __proto__: homem
}

const pedro = {
    nome: 'Pedro',
    idade: 18,
    __proto__: homem
}

console.log(pedro, joao)

// Note então que joao e pedro apontam para o objeto homem, e homem aponta para Object.prototype.

//------------

// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' 

const avo = { attr1: 'A'}

const pai = { __proto__: avo, attr2: 'B'}

const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) // output: A
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3 )

