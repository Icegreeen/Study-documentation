// IIFE => Immediately Invoked Function Expression

// Padrão IIFE é usado para fugir do escopo global
(function() {

    a = 4
    b = 5
    resultado = a + b

    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')

    console.log(resultado)
})();
