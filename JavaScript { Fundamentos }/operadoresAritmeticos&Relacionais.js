// Operadores aritiméticos:

const [ a, b , c , d] = [ 3, 5, 1 , 15]

const soma = a + b + c + d 
const subtracao = d - b
const multiplicacao = a * b 
const divisao = d / a
const modulo = a % 2

//---------------------------------------------------

// Operadores relacionais:/

//É muito usado em laços e testes condicionais. Ex: se uma coisa é maior ou menor que a outra, se é igual ou diferente e etc.

console.log('01:', '1' == 1) // '=='  compara igualdade sem se preocupar com os tipos.
// output: true.

console.log('02:', '1' === 1) // Pois temos uma string e um number.
// output: false.

console.log('03:', '3' != 3) // Eles não são diferentes.
// output: false.

console.log('04:', '3' !== 3) // Os valores não são estritamente iguais.
// output: true


console.log('05:', 3 < 2) // output: false
console.log('06:', 3 > 2) // output: true
console.log('07:', 3 <= 2) // output: false
console.log('08:', 3 >= 2) // output: true

//------------------------------------------------------------------------------------

const d1 = new Date(0)
const d2 = new Date(0)

// Neste caso, como estamos trabalhando com uma variável de referência de memória
// não vai fazer diferença usar o 'estritamente igual' ou o 'igual' para comparar, como abaixo:

// No caso abaixo ele compara a referência de memória e diz que é false.

console.log('09:', d1 === d2) // output: false
console.log('10:', d1 == d2) // output: false

console.log('11:', d1.getTime() === d2.getTime()) // output: true

console.log('12:', undefined == null) // output: true

consosle.log('13:', undefined === null) // output: false

//--------------------------------------------------------------------------------------















