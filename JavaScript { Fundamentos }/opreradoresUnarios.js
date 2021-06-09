// Unários

let num1 = 1 
let num2 = 2

// Forma pré fixada:

num1++ 
console.log(num1) // output: 2


// Forma pós fixada:

--num1
console.log(num1) // output: 1

console.log(++num1 === num2--) // Aqui, primeiro ele compara e depois incrementa.

// Dicas: Evite misturar vários operadores em uma expressão.
//        Evite usar incremento dentro de uma comparação, fuja dessa tipo de padrão.

//-------------------------------------------------------------

// Operador de exponenciacao:

let exp = 2 ** 3  // 2 evelado a 3 é igual a 8

console.log(exp) // output: 8

let base = 2 
base **= 3 // Eleva o valor armazenado na base á terceira potência.

console.log(base) // output: 8

// Com expoente negativo!

let exp = 2 ** -3 // 2 elevado a -3

console.log(exp) // output: 0.125

