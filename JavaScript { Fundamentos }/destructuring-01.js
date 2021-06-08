// novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

// Destructuring: é uma forma simplificada de tirarmos
// de dentro de uma estrutura um ou mais atributos.

// Desestruturando um dado alinhado.

const { nome, idade } = pessoa // as chaves {} representa o operador de desestruturação. 
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // passando os atributos para uma variavel
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // acessando um atributo que não existe
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}} = pessoa // acessando um objeto dentro de um outro objeto
console.log(logradouro, numero, cep) 

const { conta: { ag, num}} = pessoa // neste caso  dará erro no código pois estamos tentando acessar atributos que não existe no objeto
console.log(ag, num) // Neste caso quando formos desestruturar um dado alinhado temos de ter certeza de que o caminho tem que está setado, somente o ultimo dado que pode estar null ou undefined.

//--------------------------------------------------------------------------------------------

// 02

const [a] = [10] // desestruturacao de apenas um unico atributo.
console.log(a)

// No exemplo a seguir é desestruturado multiplos atributos em variaveis com apenas um unico operador de atribuicao.

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // aqui pegando multiplos elementos a partir de uma array, extrair/desestruturar de dentro dessa estrutura e atribuirmos a varias variaveis usando apenas uma unica atribuicao '='.
console.log(n1, n3, n5, n6)