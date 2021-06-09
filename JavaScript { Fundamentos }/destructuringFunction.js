// Desestruturando uma função que força valores randomicos 

function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * ( max - min ) + min;
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))

//---------------------------------------------------------------------------------------

// Outra função!

function rand ([min = 0, max = 1000]) {
    if (min > max) [ min, max] = [max, min]  // se um min for maior que max invertda as variaveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Passando valores.
console.log(rand([990])) // Passando apenas um valor, ele assume o min que é o primeiro.
console.log(rand([, 10])) // Passando apenas o segundo valor, deixando o primeiro vazio,
console.log(rand([])) // array vazio ele assume os valores padrões.
console.log(rand()) // output: undefined, pois os valores para serem desestruturado estão null e undefined.