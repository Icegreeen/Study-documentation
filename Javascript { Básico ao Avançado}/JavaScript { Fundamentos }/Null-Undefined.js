//Null e Undefined

let valor 
console.log(valor) // undefined 

valor = null // Ausência de valor; O null significa que a variável não está apontando para nenhum endereço de memória.
console.log(valor) // null

// Quando se trabalha com tipos que são referência, o null faz sentido.


const produto = {}
console.log(produto.preco) // Aqui o 'produto' está definido, mas não o 'preco', neste caso é undefined.
console.log(produto) // objeto vazio

produto.preco = 3.50 // adicionando chave e valor no objeto
console.log(produto)


produto.preco = undefined // evite atribuir undefined 
console.log(!!produto.preco) // como o valor é undefined o valor será false
console.log(produto) // undefined // aqui o objeto tem um atributo preco de valor undefined

produto.preco = null // sem preço 
console.log(!!produto.preco) // false, pois o valor é null
console.log(produto) // null

// para zerar uam referência é aconselhavel sempre utilizar null