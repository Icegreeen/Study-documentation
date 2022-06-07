// usando a notação literal

const obj1 = {}
console.log(obj1)

// object em JS

const obj2 = new Object
console.log(obj2)

// funçoes construtoras 

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesonto = () => {
        return preco * ( 1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000.00, 0.25)

console.log(p1.getPrecoComDesonto(), p2.getPrecoComDesonto())

// funcao factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Flávio', 3500, 5)
const f2 = criarFuncionario('Apollo', 5000, 10)

console.log(f1.getSalario(), f2.getSalario())

// Uma função famosa que retorna Objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)