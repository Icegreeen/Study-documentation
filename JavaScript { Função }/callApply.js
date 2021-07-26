//

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco()) // chamando a função diretamente
console.log(produto.getPreco()) // chamando a função a partir de um objeto

//=======================

// call and apply
// A diferença é a forma de como passamos os parâmetros para a chamada da função 

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // a partir do objeto
console.log(getPreco.call(carro, 0.17, '$')) // a partir do call: diretamente na função

console.log(getPreco.apply(carro)) // a partir do objeto 
console.log(getPreco.apply(carro, [0.17, '$']))  // a partir do apply: os parametros são passados dentro de um array