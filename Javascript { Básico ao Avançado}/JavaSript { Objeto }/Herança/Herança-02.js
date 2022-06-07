//

const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana';
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

console.log(filha2.nome) // Bia

filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Bia tem cabelo preto

// Tanto a filha1 como a filha2 estõa recebendo atributos por herança!

console.log(Object.keys(filha1));
console.log(Object.keys(filha2))

for(let key in filha2){
    filha1.hasOwnProperty(key) ? // função que retorna as propriedades do bjecto que não vinheram por herança.
        console.log(key) : console.log(`Por herança: ${key}`); // Por herança: corCabelo
}