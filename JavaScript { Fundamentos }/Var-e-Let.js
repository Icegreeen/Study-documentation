// Entendendo a dinâmica do var e let.

// Variáveis definidas com a palava reservada 'var' tem escopo global e escopo de função.

// Variáveis definidas com a palava reservada 'let' tem escopo global, escopo de função e de bloco.

//As variáveis declaradas com 'var' pertencem ao Escopo Global 
//quando são definidas fora de uma função, por exemplo:

var iphone = '2'

// Isso significa que a variável do 'iphone' é acessível por qualquer função.

//----------------------------------------------------------------------------------//

//Quando você declara uma variável dentro de uma função 
//usando 'var' o escopo dessa variável é local. Por exemplo:

function oferta(){
    var preco = 10
}

// Neste caso a variável 'preco' não pode ser acessada fora da função oferta.

//-----------------------------------------------------------------------------------//

// O próximo exemplo, exibe no console quatro números 
//de 0 até 4 dentro do loop e o número 5 fora do loop:

for (var i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`);

//Neste exemplo i é uma variável global, portanto, ela pode ser acessada dentro e fora do loop for.

//-------------------------------------------------------------------------------------//

//O exemplo a seguir utiliza 'let' em vez de 'var':

for (let i = 0; i < 5; i++) {
    console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`);

//Neste caso, o código mostra quatro números de 0 a 4 impressos pelo 
//console.log()dentro do loop for e mostra um erro do tipo ReferenceError
// ao imprimir o console.log() que está fora do loop.

//A variável i declarada com 'let' tem seu escopo bloqueado, 
//ela só existe e pode ser acessada dentro do bloco do loop 'for'.

//--------------------------------------------------------------------------------//

//Adicionadas ou não ao Objeto Global

//Variáveis com var são globais, portanto são adicionadas como sendo propriedades do objeto global. 
//O objeto global é o window quando o JavaScript é interpretado ou é o objeto denominado global no Node.js:

var iphone = 0
console.log(window.iphone); // 0

// As variáveis criadas com 'let' não são adicionadas ao objeto global:

let iphone = 0
console.log(window.iphone); // undefined

//--------------------------------------------------------------------------------------//

//Redeclaração

//Com 'var' podemos declarar novamente uma variável sem ocasionar qualquer problema:

var xiaomi = 10
var xiaomi;
console.log(xiaomi); // 10

// Com let isso não ocorre.

let xiaomi = 15
let xiaomi;
console.log(xiaomi); // error

// -------------------------------------------------------------------//

//Zona Morta Temporal - TDZ - Temporal Death Zone

//Uma variável declarada com let tem uma chamada "TDZ" que é o acrônimo do termo em inglês
//'Temporal Death Zone'. A TDZ é o tempo desde o início do bloco até que a declaração da 
//variável seja processada. 

//O exemplo a seguir ilustra a (TDZ) que é baseada no tempo e não na localização:

let log = function () {
    console.log(foo);
}

let foo = 10;
log();

//Neste exemplo do código:

// 1- Primeiro, o sinal de chave { inicia um novo escopo de bloco, portanto, a TDZ é iniciada.

// 2 - Em seguida a expressão da função log acessa a variável foo. 
//Porém a função log() ainda não foi executada e isso não é um problema.

// 3 - Então, é declarada a variável foo e inicializada com o valor 10. O tempo desde o início
// do escopo do bloco até agora em que a variável foo é acessada é chamado de TDZ (Zona de Morte Temporal).

// 4 - Assim que o motor JavaScript processa a declaração de 'foo' a TDZ termina.
//Por fim, a função log() é chamada que acessa a variável foo fora da TDZ.

//----------------------------------------------------------------------------//

// Resumo

// As variáveis declaradas usando a palavra-chave let são:
//  - Com escopo de bloco
//  - Não são inicializadas com algum valor
//  - Não são anexadas ao Objeto Global

//Redeclarar uma variável usando let causará um erro.

//A TDZ de uma variável declarada com let começa a partir do bloco até que a inicialização seja avaliada.

//Por último, mas não menos importante, a partir do ES6, é recomendado que você 
//use a palavra-chave 'let' e pare de usar a palavra-chave 'var' para declarar uma variável.
