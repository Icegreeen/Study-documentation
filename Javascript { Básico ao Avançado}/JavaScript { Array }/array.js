// Array

// Array é uma estrutura dinâmica, cresce e diminui dinamicamente,
// É uma estrutura indexada a partir do 0,
// Ele é um objeto

console.log(typeof Array, typeof new Array, typeof []) // function - object - object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // ....

aprovados[3] = 'Paulo'; // adicionado o quarto elemento
aprovados.push('Abia') // adicionando um novo elemento 
console.log(aprovados.length) // contando os elementos

aprovados[9] = 'Rafael';
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // os elementos do 5 ao 8 estão disponíveis, porém estão undefined

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

delete aprovados[1];
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia

