//

function getInteiroAleatorioEntre (max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opecao = 0

while ( opecao != -1)  {
    opecao = getInteiroAleatorioEntre (-1, 10)
}