// switch

// A estrutura condicional switch cria scripts capazes de executar 
// diferentes blocos de código de acordo com diferentes condições.

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;     // Se você omitir a instrução break, o próximo caso será executado mesmo se a avaliação não corresponder ao caso.
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

//------------------------------------------------------------------------------------

// Outro exemplo:

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: //
        case 9:
            console.log('Black-mirror')
            break
        case 8: case 7:
          console.log('Aprovado')
          break
        case 6: case 5: case 4:
          console.log('Recuperação')
          break
        case 3: case 2: case 1: case 0:
          console.log('Reprovado')
          break
        default: 
          console.log('Nota inválida')
    }
}

imprimirResultado(-1)

//-------------------------------------------------------------------------

var fruits = '1';

const exercicio = function() {
  switch (fruits) {
    case 'Banana': 
      console.log('Olá')
      break
    case 'Maçã':
      console.log('Bem-vindo')
      break
    default:
      console.log('Não há nada aqui!')
  }
}

exercicio()