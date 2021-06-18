//

function Pessoa () {
    this.idade = 0

    const self = this 

    setInterval(function () { // dispara uma outra função a partir de um intervalo que passamos para ele.
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 

}

new Pessoa  // output: NaN

// Neste caso o this.idade++ não aponta para o objeto pessoa pq quem está disparando 
// a chamada dessa função é um temporizador (setInterval) e não o próprio objeto pessoa.

// Como resolvemos esse problema ?

//através do método bind

.bind(this)

// ou, criando uma constante self e apartir dela acessamos os 
// atributos do suposto this que que queremos acessar.

const self = this 







