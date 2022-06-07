//  Este é um exemplo básico de desestruturação de objeto.
//  Desestruturando objetos e parâmetros de funções.

//Estamos declarando variáveis, que correspondem aos mesmos nomes dos valores que fazem parte do objeto user.

const user = {
    firstName: 'Flavio',
    lastName: 'Aquila',
    age: 33,
  };

  const { firstName, lastName } = user;
  console.log(`${firstName} ${lastName}`);

// Output:
// Flavio Aquila

  //---------------------------------------------------------------------

let firstName = 'F';
let lastName = 'A'

const user = {
  firstName: 'Flavio',
  lastName: 'Aquila',
  age: 33,
};

({ firstName, lastName } = user);

console.log(`${firstName} ${lastName}`);

//O que fiz acima foi alterar os valores da minhas variáveis locais, declaradas nas linhas 1 e 2, para os valores que constavam no objeto user.

// Output:
// Flavio Aquila

//----------------------------------------------------------------------------------------------

// Alterando nomes de variáveis através da desestruturação

const user = {
    firstName: 'Flavio',
    lastName: 'Aquila'
};

const { firstName: name, lastName, countryName: country = 'Brasil' } = user;

console.log(`${name} ${lastName} do ${country}.`);

// Output:
// Flavio Aquila do Brasil.

//----------------------------------------------------------------------------

// Desestruturação de objetos aninhados.

const user = {
    firstName: 'Flavio',
    lastName: 'Aquila',
    social: {
      github: 'https://github.com/Icegreeen',
    },
    skills: {
      backend: {
        languages: [ 'JavaScript', 'C#', 'Go', 'PHP' ],
      }
    },
  };

const { 
    social: { github }, 
    skills: { 
      backend: { languages: languagesBackend }, 
      frontend: { languages: languagesFrontend = 'Não informada' } = {} 
    }  
} = user;

console.log(`${github} - ${languagesBackend} - ${languagesFrontend}`);

// Output:
// https://github.com/Icegreeen - JavaScript,C#,Go,PHP - Não informada

//Observe que aqui, o que fiz foi usar a desestruturação aninhada declarando as variáveis github, 
//languagensBackend e languagesFront. Também aproveitei para unir conceitos anteriores, alterando
// o nomes de variáveis, por quê teríamos duas variáveis languages e atribui um valor padrão para
// languagesFrontend e frontend para tratar a inexistência dos objetos.

//--------------------------------------------------------------------------------------------

const user = {
    firstName: 'Flavio',
    lastName: 'Aquila',
    age: 33,
    social: {
      github: 'https://github.com/Icegreeen',
    },
    skills: {
      frontend: {
        languages: [ 'HTML', 'CSS', 'JavaScript' ],
        frameworks: [ 'React', 'React Native' ],
      },
      backend: {
        languages: [ 'JavaScript', 'C#', 'Go', 'PHP' ],
      }
    },
};

function summary() {
    console.log(`Nome completo: ${user.firstName} ${user.lastName}`);
    console.log(`Github: ${user.social.github}`);
    console.log(`Habilidades: ${user.skills.backend.languages}`);
  }
summary();

  // Output:
  // Nome completo: Flavio Aquila
  // Github: https://github.com/Icegreeen
  // Habilidades: JavaScript,C#,PHP

// O resultado foi o resumo do usuário. A solução aplicada está correta, no entanto, se eu precisar 
//ampliar este resumo, adicionando novas informações, posso facilmente cometer erros de digitação, por 
//exemplo, skills pode ser escrito skill.

// Mas digamos que tomei o cuidado, ainda terei que lidar com objetos aninhados, e quanto mais níveis eles
// tiverem, maior será minha string. Observe o objeto “languages“, precisei acessar “user.skills.backend”
// para então chegar no destino.. Embora isto não seja um problema, podemos tornar o código mais limpo e 
// organizado com a desestruturação de objetos.

//-----------------------------------------------------------------------------------------------------

// Desestruturando parãmetros de funções!

// Desestruturação também pode ser aplicada a parâmetros de funções, talvez você tenha percebido 
// esta possibilidade já no primeiro exemplo, quando desestruturei o objeto user, passado como 
// parâmetro para a função summary. O cuidado que devemos ter aqui é sempre informar o parâmetro,
// caso contrário teremos um erro. Este é o exemplo:

function summary ({ firstName, lastName, social: { github }, skills: {backend} }) {
    console.log(`Nome completo: ${firstName} ${lastName}`);
    console.log(`Github: ${github}`);
    console.log(`Habilidades: ${backend.languages}`);
}

summary(user);
