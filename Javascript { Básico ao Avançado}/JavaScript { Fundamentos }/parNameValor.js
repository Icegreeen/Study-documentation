// par nome/valor 

const saudacao = 'opa' // contexto léxico 1. //  Léxico tem haver com palavra  

//O contexto léxico é um contexto ou local na qual a minha variável foi definida fisicamente no código.

function exec () { // contexto léxico 2
    const saudacao = 'Faaalaa'; // Note que já temos uma variável definida com o mesmo nome, isso acontece devido ao fato de estarem definidas em contextos diferentes.
    return saudacao; // o retorno procura no contexto mais restrito que é a função, se ele achar já resolve e retorna o valor. Se não, ele irá procurar em um contexto maior.
}

// Objetos são grupos aninhados de pares: nome/valor.
const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: '90',
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: '123'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);