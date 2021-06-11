// switch

// A estrutura condicional switch cria scripts capazes de executar 
// diferentes blocos de código de acordo com diferentes condições.

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log('Today is ' + day);

//---------------------------------------------------------------------------------------------

// A estrutura condicional switch permite executar um bloco de código 
// diferente de acordo com cada opção (cada 'case') especificada. 

// Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.

//Outro exemplo:

var tipoUsuario = 'Admin'

const boasFestas = function () {
    switch (tipoUsuario) {
        case "Admin":
            console.log("*|*| Feliz Natal, chefe! |*|*");
            break;
        case "Gerente":
            console.log("Boas festas, meu amigo!");
            break;
        default:
            console.log("Boas festas!");
    }
}

boasFestas()









const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: //
        case 9:
            console.log('Quadro')
    }
}