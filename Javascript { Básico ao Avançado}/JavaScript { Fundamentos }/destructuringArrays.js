// Desestruturação de Arrays

// Na desestruturação de array, você usa um literal de array no lado esquerdo 
// de uma expressão de atribuição. Cada nome de variável no literal da matriz, 
// é mapeado para o item correspondente no mesmo índice do array desestruturado. 

const coords = ['-55', '20'];

// Desestruturando o Array
const [lat, lng] = coords;

console.log(`Latitude: ${lat}, Longitude: ${lng}`); // Latitude: -55, Longitude: 20

// Neste exemplo, o que fizemos foi atribuir os valores do nosso array coords para duas 
// variáveis locais: lat e lng, usando a desestruturação do array. Note que cada variável
// é mapeada para o mesmo item correspondente no mesmo índice do array.

//---------------------------------------------------------------------------------------------------

// Valores default!

// Quando o número de itens do nosso Array é maior que o número de variáveis locais declaradas
// no novo literal, os itens excedentes não serão mapeados, ou se o número de variáveis declaradas
// for maior que o número de itens no array, nossas variáveis locais serão atribuídas como undefined.

const coords = ['-55', '20'];

// Definindo o valor default 0 para distance
const [lat, lng, distance = 0] = coords;

console.log(`Latitude: ${lat}, Longitude: ${lng}, Distance: ${distance}`);  // Latitude: -55, Longitude: 20, Distance: 0

// Agora veja como realizar a atribuição na desestruturação, semelhante ao que fazemos com objetos, 
// a diferença é que não precisamos colocar a expressão de atribuição entre parênteses.

let lat = 40;
let lng = 80;

console.log(`Latitude: ${lat}, Longitude: ${lng}`); // Latitude: 40, Longitude: 80

const coords = ['-55', '20'];

// Atribuindo o valor desestruturado para as variáveis locais
[lat, lng, distance = 0] = coords;

console.log(`Latitude: ${lat}, Longitude: ${lng}`); // Latitude: -55, Longitude: 20