// Getters e Setters 

//  O prefixo get tem a função de retornar um valor, e o set serve para atribuir um valor.

// Ambos funcionam como se fossem uma propriedade da classe.

class Pessoa {
    constructor () {
        this.data = {}
    }

    cpfIsValid (value){
        return /^\d\.\d\.\d\-\d$/.test(value)
        
    }

    get cpf() { // método especial que serve para recuperar o valor de um item

        // verifica se a propriedade não existe no atributo this.data da classe
        if (!this.data.hasOwnProperty('cpf')) {
            return undefined
        }
        // retorna o valor da cpf
        return this.data.cpf
    }

    set cpf(value) { // método especial que serve para definir um valor. 
        if (!this.cpfIsValid(value)){
        throw new Error('Número de cpf inválido')
        }

        this.data['cpf'] = value
    }
}

const pessoa = new Pessoa()

pessoa.cpf = '932.364.610-55'

console.log(pessoa.cpf)


