// Função Construtora.

// A função constutura funciona como uma classe/molde, e a partir desse molde 
// podemos criar quantos objetos quisermos, sendo que o dado interno da função 
// pode pertencer a cada um dos objetos instanciados.

function Carro (velocidadeMaxima = 200, delta = 5) {

    // Atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Com o new iniciamos a instância. 
// Temos duas instâncias diferentes a partir de uma mesma função construtora.

// 1 - objeto instanciado 
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// 2 - objeto instanciado 
const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// type data
console.log(typeof Carro) // function
console.log(typeof ferrari) // object