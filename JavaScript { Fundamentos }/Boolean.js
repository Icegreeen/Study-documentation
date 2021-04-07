// Entendendo Boolean

let isAtivo = false 
console.log(isAtivo) // false

isAtive = true
console.log(isAtivo) // false

isAtivo = 1
console.log(!!isAtivo) // true

//-

console.log('os verdadeiros....')

console.log(!!3)
console.log(!!-1)
console.log(!!' ') //espaço vazio
console.log(!!'texto') // um valor valido 
console.log(!![]) //array
console.log(!!{}) // objeto literal
console.log(!!Infinity) // tipo infinito
console.log(!!(isAtivo = true)) // atribuição
console.log(!!(isAtivo = 0)) // Essa atribuição é false

console.log('os falsos...')

console.log(!!0) // 
console.log(!!'') //string vazia
console.log(!!null) //
console.log(!!NaN) // not a number 
console.log(!!undefined) // 
console.log(!!(isAtivo = false)) //atribuição


console.log('finalizando....')
console.log(!!(''  || null  || 0  || " " )) // aqui a expressão retorna o primeiro true que ele encontra que é o " "

// Dentro de um contexto expressão lógica podemos usar coisas que não são verdadeiras
// que no final será convertido em verdadeiro ou falso dependendo do contexto.

// Exemplo:

let nome = ''
console.log(nome  || 'Desconhecido') // O nome deu falso, então ele retorna o segundo valor dessa expressão.