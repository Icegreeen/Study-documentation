// Object.preventExtensions

// Função que não deixa estender os atributos. (Podendo alterar seu valor ou remover)

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'; // Alterar os dados é permitido
produto.descricao = 'Borracha escolar branca'; // Isso não vai acontecer pois não temos a 'descricao' como atributo.
delete produto.tag
console.log(produto) 

// Object.seal (selando)

const pessoa = {nome: 'Flávio', idade: '21'}
Object.seal(pessoa) // Após selar o objeto não se pode adicionar e excluir, apenas modificar os atributos.
console.log('Selado:', Object.isSealed(pessoa)) // true

// Object.freeze = selado + valores constantes

// Ou seja, ele é selado e não pode ser rescrito.

