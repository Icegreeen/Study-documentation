// Closure!

// Conceito: É uma função interior que tem acesso a variáveis de uma função exterior.

// A closure tem acesso a três níveis de escopo:

// 1 - ao seu próprio escopo (variáveis definidas entre suas chaves)
// 2 - as variáveis da função exterior
// 3 - e as variáveis globais.

// Para usar uma closure, simplesmente defina uma função dentro de outra 
// função e exponha-a. Ou seja, deve retorná-la ou passá-la para outra função.

// Elas nos permitem trabalhar com alguns conceitos extremamente úteis em nossas aplicações, como:

// 1 - encapsulamento de variáveis e métodos
// 2 - alteração de escopo
// 3 - criação de módulos
// 4 - criação fábricas de funções -factories

// Exemplo prático:

// scope: global

var a = 1

return function one() {
    // scope: one
    // closure: [one, global]
    var b = 2;

    return function two() {
        // scope: two
        // closure: [two, one, global]
        var c = 3;

        return function three() {
            // scope: three
            // closur: [three, two, one, global]
            var d = 4;
            console.log(a + b + c + d)
        }()
    }()
}()

let gals = 1

const time1 = function() {
    console.log(gols)
}

const time2 = function(){
    let gols = 2
    time1()
}

time2()

