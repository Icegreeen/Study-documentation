// operador spread (...)

// *destina-se a expandir/juntar um array, objeto ou uma string.

const livros1 = ["CSS3", "JavaScript", "PHP"];
const livros2 = ["HTML5", "React"];
const precos = [70, 30, 90, 100, 10];

let livros = livros1 + livros2; 
// output: CSS3,JavaScript,PHPHTML5,React

let livros = [...livros1, ...livros2]; 
// output: [ "CSS3", "JavaScript", "PHP", "HTML5", "React" ]

let precoMaximo1 = Math.max(...precos); // output: 100

// A possibilidade de se passar um array como parâmetro de uma função 
// é uma das mais poderosas funcionalidades do operador spread .

// outro exemplo prático!

let a = [ 'xiaomi', 'samsung'] 
let b = [ 'iphone',  'asus']
let v = [ 1, 50, 500, 1000]

let resultado = [...a, ...b] // output: [ 'xiaomi', 'mac', 'mac', 'xiaomi' ]

let precoMaximo2 = Math.max(...v) // 1000





