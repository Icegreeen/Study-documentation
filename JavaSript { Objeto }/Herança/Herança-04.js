
// Todos eles tem o atributo .prototype, pois são funções, e toda função tem esse atributo.

console.log(typeof String) // function
console.log(typeof Array)  // function
console.log(typeof Object) // function


String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("Rocketseat education".reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(["a", "b", "c"].first())

// Não subscreva uma função que já existe nativamente no prototipo String, que é o 'toString'.

String.prototype.toString = function (){ // Subscrevendo
    return "lascou tudo"
}

console.log('Rocktseat Education'.reverse());