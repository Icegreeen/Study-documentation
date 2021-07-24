// Closure é o escopo criado quando uma função é declarada
// Esse escopo prmite a função acessar e manipular variaveis externas À função.

// Contexto léxico em ação!

const x = 'Global'

function fora(){

    const x = 'local'

    function dentro(){
        return x
    }

    return dentro
}

const minhaFuncao= fora();
console.log(minhaFuncao())

















