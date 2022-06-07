// 

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
} 

// aqui iremos encadear uma estrutura de condição

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) { // // Quando a condição entra em um bloco, ele não executa os demais.
        console.log('Quadro')
    } else if (nota.entre( 7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação') 
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida!') // O 'else' só é executado quando as condições 'if' acima forem false.
    }

    console.log('Fim')
}

imprimirResultado(10); // output: Quadro
imprimirResultado(8.9) // output: Aprovado
imprimirResultado(6.55) // output: Recuperação
imprimirResultado(3.3) // output: reprovado
imprimirResultado(-1) // output: Nota inválida
imprimirResultado(11) // output: Nota inválida!