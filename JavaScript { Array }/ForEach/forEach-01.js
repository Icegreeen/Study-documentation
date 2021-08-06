// 

// Listando uma lista de nomes

const aprovados = ['Agatha', 'Also', 'Daniel', 'Flávio'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
});

// sem indice

aprovados.forEach(nome => console.log(nome)) // sem indice