// 

// Entendendo o this numa arrowfunction

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true

const obj = {}

comparaComThis = comparaComThis.bind(obj) 
comparaComThis(global) // false
comparaComThis(obj) // true

//==========================================

// arrowfunction; o this não vai variar

// *o this numa função arrow é um this associado 
//  ao contexto no qual a função foi escrita.

//  Não há variação de forma alguma, mesmo forçando 
//  um mudança de contexto com o método bind.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true