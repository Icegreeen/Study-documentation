//  in

//Sintaxe: prop in object

// Parâmetros: prop / object 

// prop:

// Um string ou símbolo representando o nome de uma propriedade ou 
// o índice de um array (não-símbolos serão trazidos para strings).

//object:

// Objeto para verificar se este (ou sua cadeia de protótipo)
// contém a propriedade com o nome especificado.

//-----------------------------------------------------------------------------------

// Arrays

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // retorna true
3 in trees        // retorna true
6 in trees        // retorna false

'bay' in trees    // retorna false (você precisa especificar o número do índice, não o valor naquele índice)
'length' in trees // retorna true (length é uma propridade do Array)
Symbol.iterator in trees // retorna true (arrays são iteráveis, funciona apenas na ES2015+)

// Objetos predefinidos

'PI' in Math  // retorna true

// Objetos personalizados

var mycar = {make: 'Honda', model: 'Accord', year: 1998};
'make' in mycar  // retorna true
'model' in mycar // retorna true

//-----------------------------------------------------------------------------------------------

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 

for ( let i in notas ) {
    console.log(i, notas[i])
}

//

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 25,
    peso: 64
}

for ( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}