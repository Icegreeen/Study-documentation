// forEach()

// Permite executar uma função para cada item de um array

// 1 - Function

cores = ['Verde', 'Amarelo', 'Azul', 'Branco'];

function imprimir(item){
    console.log(item)
}

cores.forEach(imprimir) // output: Verde Amarelo Azul Branco

// 2- Function (Multiplicando x2 para cada item do array)

numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item){
    console.log(item*2) // tabuada do 2
}

numeros.forEach(tabuadaDe2)

// 3 - Function ( Somando todos os números.)

numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item){
    total += item;
}

numeros.forEach(somar);
console.log(total)

// 4- Function ( Pegar os elementos com a iniciais F)

marcas = ['Fiat', 'Chevrolet', 'Ford', 'Volkswagen', 'Lamborguini', 'Ferrari']
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice){
    if (marcas[indice].indexOf("F") == 0){
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

// 5 - Function (Converter para maiusculo)

nomes = [ 'Alberto', 'Alex', 'Sandro', 'Roberta']

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);
