// Object

//Objeto em javascript é uma coleção de chave e valor. 

// Aqui criamos um objeto e vazio e adicionamos atributos.

const prod1 = {} // objeto vazio
prod1.nome = 'Celular Xiaomi i8'// no objeto vazio temos uma chave/identificador chamado 'nome', que dentro dela temos uma string
prod1.preco = 1500.00
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

// Outra forma de criar um objeto é na forma literal.
// Veja o exemplo:

const prod2 = {
    nome: 'MacBook',
    preco: 6000,
}

console.log(prod2)

// ------------------------------------------------------------------//

//Atrubuição por referência!

// O que é de fato que a variável 'a' armazena ?
// Obs: Ela não tem por definição o conteúdo do objeto.

// Resposta: o que ela tem é o endereço do qual este objeto está localizado. Um endereço apontando ao objeto.

const a = {name: 'Iphone'} // Objeto 'a' criado

// Dando a ao contexto acima, na atribuição o 'b' está recebendo o mesmo endereço que o 'a' aponta.
const b = a

// Aqui mudamos a partir a constante 'b' o atributo name de 'Iphone' para 'Xiaomi'
b.name = 'Xioami'

// Neste caso a constante 'a' sente a diferença, pois as duas constantes armazena o mesmo endereço de objeto.

// Neste caso (const b = a) é uma atribuição por referência, pois as duas const apontam pra um mesmo local.
// A partir dassas duas refêrencias conseguimos acessar o objeto.

