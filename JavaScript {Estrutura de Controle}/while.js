//  while

// while é uma estrutura de repetição

function getInteiroAleatorioEntre (max, min) { // função que gera um valor randomico 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// laço

while ( opcao != -1)  {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opeção escolida foi ${opcao}.`)
}

