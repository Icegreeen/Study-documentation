// Math

// Este objeto é utilizado para realizar operações matemáticas, sejam elas aritméticas, 
// funções trigonométricas, funções de arredondamento e comparações. A sintaxe de 
// utilização  dos métodos deste objeto é a seguinte:

// Representação: Math.método(valor)

// Math é um objeto embutido que tem propriedades e métodos 
// para constantes e funções matemáticas. Não é um objeto de função.

// Math = objeto
// método = método do objeto.
// () = valor

// ------------------------------------------------------------------

// Math.abs()

// Retorna o valor absoluto de um número, isso significa que o retorno sempre será positivo. 
// Caso seja informado um valor negativo à este método., ele retornará o mesmo como positivo

var valor1 = Math.abs (-1234);

console.log(valor1); // output: 1234

//-----------------------------------------------------------------------------

// Math.random()

// Este método retorna um número aleatório entre 0 e 1 com até 15 dígitos. 
// Este número aleatório é definido através do relógio do computador.

var valor2 = Math.random()
console.log(valor2)

//--------------------------------------------------------------------------------

// Math.round()

// Com este método é possível arredondar um valor. 

var valor3 = Math.round(15,7)
console.log(valor3)

//--------------------------------------------------------------------------------

// Para mais métodos do objeto Math:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
