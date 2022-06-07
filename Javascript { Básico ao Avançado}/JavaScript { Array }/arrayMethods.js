//

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// 1 - (pop) método que remove o último elemento do array

pilotos.pop() //  Massa quebrou o carro! kkkkkkkkkkkk
console.log(pilotos)

// 2 - (push) Método que adiciona elementos na ultima posição do array
pilotos.push('Verstappen')
console.log(pilotos)

// 3 - (shift) Remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos)

// 4 - (unshift) Adiciona elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// 5 - (splice) Adiciona e remove elementos.

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa') // (2, 0)adicionar no índice 2 e não remover ninguém.
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removendo do índice 3 um único elemento
console.log(pilotos) // massa quebrou o carro de novo kkkkkkk

// 6 - (slice) Retorna um novo array

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // aqui ele pega do índice 1 mas 0 4 não entra
console.log(algunsPilotos2)