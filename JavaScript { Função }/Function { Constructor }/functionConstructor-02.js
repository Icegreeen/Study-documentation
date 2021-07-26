
// Imagina que vc tem no seu sistema Funcionário e todos funcionários tem um nome, 
// um cargo e um salário. A estrutura dizendo que o Funcionário tem esses atributos 
// pode ser a função e quando vc usa o new com uma função vc cria um objeto e esse 
// processo é chamado instanciação.

// Cada objeto criado respeita a estrutura dada pela função, mas os valores dos atributos
// são diferentes para cada objeto criado (ou instanciado). Então respeitando a estrutura 
// de que todo Funcionário tem 3 atributos (nome, cargo e salário), os objetos teriam seus
// próprios valores, por exemplo:

function Funcionario(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
}
 
const funcionario1 = new Funcionario('Ana Silva' , 'Analista de TI', 8400)

const funcionario2 = new Funcionario('Pedro Mesquita' , 'Gerente', 15600)

const funcionario3 = new Funcionario('Rafael Souza' , 'Contador', 10512.50)

console.log(funcionario1)