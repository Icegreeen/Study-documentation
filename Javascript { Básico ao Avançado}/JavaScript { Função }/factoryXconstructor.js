//

// A maior diferença entre os Construtores e os Factorys além do operador 
// new, é que os Factorys retornam um objeto, enquanto os Constructors não.

// factory
function PessoaFactory(nome){
    var obj = new Object();
    obj.nome = nome;
    return obj;
};

//O factory cria um novo objeto, seta seus atributos e o retorna.

let pessoa1 = PessoaFactory('Pedro');
console.log(pessoa1.nome) //Pedro

//=======================================================================

// constructor
function PessoaConstructor(nome){
    this.nome = nome;
};

let pessoa2 = new PessoaConstructor('Maria')
console.log(pessoa2.nome); // Maria

// Até ai, quase a mesma sintaxe da função Factory, mas quando usamos o operador 'new',
// por debaixo dos panos, é criado um novo objeto vazio e depois feita uma chamada 
// para a função call passando o objeto que acabou de ser criado como contexto:

// Por debaixo dos panos acontece isso:

let pessoa3 = {}
PessoaConstructor.call(pessoa2, 'Maria');
console.log(pessoa2.nome); //Maria

// A funcão PessoaConstructor é executada no contexto do objeto pessoa3, isso faz com que 
// o this.nome dentro da função construtora passe a ser um atributo do objeto pessoa3, que
// recebe o parâmetro passado para a função construtora;