// Callback

// É nada mais é do que passarmos uma função e ela ser chamada quando
// um evento acontecer. No execução do loop do forEach, cada vez que 
// ele encontra um atributo, ele executa a função. Cada elemento percorrido
// ele chama o callback passando o próprio elemento e o indice.

const fabricantes = ["Mercedes", "Audi", "Bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);

// Abaixo, cada atributo que ele encontra é executado o console.log

fabricantes.forEach(function(fabricante) { 
    console.log(fabricante)
})

// Arrow
fabricantes.forEach(fabricante => console.log(fabricante))

