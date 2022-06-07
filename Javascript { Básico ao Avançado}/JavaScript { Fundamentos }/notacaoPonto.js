// Notação ponto // Acessando membros de uma função ou objeto através do ponto.

const obj1 = {} 
obj1.nome = 'bola' //Mesmo que o atributo não esteja no objeto, o ponto o cria dinâmicamente.

console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome // Recebemos o atributo 'nome' por parâmetro, e através do 'this' dentro da função tornamos ela pública.
    this.exec = function () {
        console.log('Esperando...')
    }
}

const obj2 = new Obj ('BMW i8')
console.log(obj2.nome)

const obj3 = new Obj ('Camaro')
console.log(obj3.nome)

obj3.exec()