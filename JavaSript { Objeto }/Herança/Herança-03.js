

function MeuObjeto() {};
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); 

MeuObjeto.prototype.nome = 'Anônimo';

MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Flávio';
obj2.falar();

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype; // Aqui eu mudo a referência de prototipo do objeto, de Object.prototype para MeuObjeto.prototype.
obj3.nome = "Obj3" // a partir dai o obj3 passar a ter acesso a herança do MeuObjeto
obj3.falar()

// Resumindo a loucura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)// true
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // null, pois é o fim da cadeia.
