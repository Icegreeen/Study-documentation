//

// function constructor

class Pessoa {
    constructor(nome){
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Flávio') // instancia
p1.falar()

//------------------------------------------------------------------

// function factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Aquila')
p2.falar()