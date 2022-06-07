// Json vs Objeto

// Passando um objeto para Json.

const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj));


// console.log(JSON.parse("{a: 1, b: 2, c: 3}"));
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"));

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

// Ele suporta vários formatos diferentes, mas todos tem que estar delimitado com aspas duplas.
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))