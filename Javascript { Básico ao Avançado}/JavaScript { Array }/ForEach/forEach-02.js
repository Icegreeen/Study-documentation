// funcionamento interno do forEach!

// ForEach por dentro (Implemetando nosso próprio forEach)!

Array.prototype.forEach2 = function(callback){
    for ( let i = 0; i < this.length; i++) { // percorrendo os indices do primeiro ao ultimo
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Also', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})