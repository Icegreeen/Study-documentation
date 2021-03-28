// Array 

const valores = [7.1 , 5.9, 6.3, 9.3]
console.log(valores[1]) // aqui é uma forma de acessamos através do index, pois arrays são indexadas 
console.log(valores[0], valores[3]) // retorna 7.1 e 9.3
console.log(valores[4]) // undefined, pois não há o quarto elemento

valores[4] = 10 // atribuindo um valor para o elemento 4 da array
console.log(valores) // Adicionado valor no array
console.log(valores.length) // olength verifica quantos elementos temos 

// O push é uma função de array para adiconar novos elementos, exemplo:

valores.push({id:3}, false, null, 'test') // {id: 3} é um objeto
console.log(valores)

// O pop retira "saca" o ultimo valor do array e o retorna, exemplo:

console.log(valores.pop()) // 'teste'
delete valores[0] // deletou o 7.1, primeiro elemento do array
console.log(valores)

console.log(typeof valores) // sabendo o tipo do valor, que no caso da array valores é 'object'

// *No javascript um array é do tipo object