// Getters / Setters

// Eles nos ajudam a encapsular/proteger/isolar propriedades e facilitar o trabalho com objetos.
// Normalmente utilizamos quando precisamos fazer validações ou tratamentos antes de salvar um dados.
// O mesmo acontece para recuperá-los. Sem os getters e setters poderíamos fazer desta forma:

//definimos um valor
variavel = 123;

//resgatamos o valor para mostrar na tela
console.log( variavel.toFixed(2).replace(".",",") );

// A melhor forma de fazermos isso é implementando os manipuladores para tratar os valores
// dentro do objeto, a utilização é bem simples basta incluir o prefixo antes da função:

var variavel = {
    valor: 0,
    
    get moeda() { // define o get moeda
      return "R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get int() { // define o get integer
      return this.valor;
    },  
    set int(i) {  // define o set
        this.valor = i;
    }
  }
  
console.log(variavel.moeda);

variavel.int = 123;
console.log(variavel.moeda);

variavel.int = 456;
console.log(variavel.int);

//-----------------------------------------------------------------------------

function pessoa() {
    this.name = "Flávio"
}

Object.defineProperty(pessoa.prototype, "ola", {
    get: function() {
        return "Hi, " + this.name + "!"
    }
});

var me = new pessoa('Alexandra')
console.log(me.ola)

//------------------------------------------------------------------------------

