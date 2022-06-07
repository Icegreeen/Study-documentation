// Operador ternário

// O operador condicional ternário é um atalho para o condicional if.

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(3.1))

//------------------------------------------------------------------------

// uma condição lógica padrão utilizando if

let age = 19;
let canDrive;

if ( age > 16) {
    canDrive = 'yes'
} else {
    canDrive = 'not'
}

console.log(canDrive)

// condição lógica utilizando operador ternário

const idade = 15;
const podeDirigir = idade > 16 ? 'yes' : 'not';

console.log(podeDirigir)

