// Exercicio de Orientação a objeto

class Animal {
  constructor(type, name, sound, age) {
    // conjunto de instruções que prepara o objeto para ser usado
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.age = age;
  }

  makeASound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
}

// Instanciado objetos

var pudim = new Animal("cat", "Pudim", "miaouo", 3);
var misty = new Animal("dog", "Misty", "Au au au", 1);
var vaca = new Animal();

// Exibindo

console.log(pudim);
console.log(misty);
console.log(vaca);

// Acessando o método da classe:

pudim.makeASound();

misty.makeASound();

vaca.makeASound();
