//

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)        
    }
}

pessoa.falar()

const falar = pessoa.falar // output: undefined
falar() // conflito entre paradigmas: funcional e OO

// o bind é o método responsável por amarrar determinado objeto para ele
// ser o dono da execução daquele método sempre que aquele método for chamado.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()