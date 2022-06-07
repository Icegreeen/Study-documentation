//

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback

const notasBaixas1 = []

for (let i in notas) { // adicionando as notas abaixo de 7 no array vazio.
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // push: adicionar elemento no array
    }
}

console.log(notasBaixas1)

// Com callback

notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2);

// Com arrow

const notasMenorQue7 = notas => notas < 7;

const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)