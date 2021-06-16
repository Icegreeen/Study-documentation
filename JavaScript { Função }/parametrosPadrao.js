
// Estratégia mais famosa de gerar um valor padrão

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
        return a + b + c
}

console.log(soma(), soma(3), soma(1 , 2 ,3), soma(0, 0 ,0))

// Valor padrão es2015 ( A MAIS RECOMENDÁVEL )

function soma1( a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma(0, 0, 0))