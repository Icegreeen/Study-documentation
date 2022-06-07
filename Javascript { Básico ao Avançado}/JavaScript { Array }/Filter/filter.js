// Filter (Função callback que retorna true ou false)

// A depender das condições dada pelo filtro cada elemento irá ser verificado.

// Se for true o array resultante terá aquele elemento.
// Se for false o array resultlante não terá aquele elemento.

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'MacBookk', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
];

console.log(produtos.filter(function(p) {
    return false
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))