//

/* 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function resolver( a = 10, b = 5) {

    soma = a + b
    subtracao = a - b
    multi = a * b
    divisao = a / b

    return soma, subtracao, multi, divisao
}

resolver()

console.log(soma)
console.log(subtracao)
console.log(multi)
console.log(divisao)

/*
    02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
    Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

// 3 - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function vamo(base, expoente) {
    resultado = base ** expoente
    return resultado
}

console.log(vamo(3, 4))

// 4 - 

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)