//

// Sem desestruturação – antes da ES6

const livros = ["CSS3", "HTML5", "JavaScript", "React"];

console.log(livros[0]); // CSS3
console.log(livros[3]); // React

// Com desestruturação – a partir da ES6

const livros = ["CSS3", "HTML5", "JavaScript", "React"];
let [css, html5, js, react] = livros; // aqui a desestruturação

console.log(css);// CSS3
console.log(react); // React

//========================================================================

// Sem desestruturação – antes da ES6

const livros = [
    { titulo: "React", autor: "Maurício Samy Silva" },
    { titulo: "Node Essencial", autor: "MRicardo R. Lecheta" },
    { titulo: "UX Desing", autor: "Will Grant" }
];

console.log(livros[0].titulo); // React
console.log(livros[2].autor); // Will Grant

// Com desestruturação – a partir da ES6

const livros = [
    { titulo: "React", autor: "Maurício Samy Silva" },
    { titulo: "Node Essencial", autor: "MRicardo R. Lecheta" },
    { titulo: "UX Desing", autor: "Will Grant" }
];
    
let [lUm, lDois, lTres] = livros;

console.log(lUm.titulo); // React
console.log(lTres.autor); // Will Grant