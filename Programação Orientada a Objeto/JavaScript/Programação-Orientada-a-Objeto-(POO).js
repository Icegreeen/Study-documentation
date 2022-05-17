// Uma breve noção de Programação Orientada a Objeto.

// No mundo da programação há várias maneiras de programar.
// A elas damos o nome de "paradigmas de programação"(POO, funcional, estruturada) etc..

// Suponha que tenhamos que criar um sistema de gestão de usuários.
// Esses usuários tem nome, sobrenome e e-mail. E será possível criar um usuário e exclui-lo.

// Dados as informações acima, teríamos:

// Classes: usuários.
// Atributos: nome, sobrenome e e-mail.
// Métodos(ações): criar usuário e excluir.

// Teríamos algo como:

class Usuario {
    nome;
    sobrenome;
    email;
    criar();
    excluir();
}

// Existe um conceito do POO chamado Herança. (Uma classe herdando as coisas de outra classe)

// Suponhanmos que tenhamos que criar um sistema de gestão de usuários.

// - Usuário do tipo Aluno tem nome, sobrenome e turma.
// - Usuário do tipo Professor tem nome, sobrenome e e-mail.

// Teríamos algo como:

class Aluno {
    nome;
    sobrenome;
    turma;
}

class Professor {
    nome;
    sobrenome;
    email;
}

// Independente se são alunos ou professores, eles tem 
// atributos em comum, e ainda sim, ambos são usuários.

// Vamos criar uma classe base com os atributos em comum e fazer 
// com que as classes Professor e Aluno HERDEM coisas em comum da classe.

class Usuario {
    nome;
    sobrenome;
}

class Aluno extends Usuario {
    turma;
}

class Professor extends Usuario {
    email;
}

// Antes de continuarmos, vamos falar de dois termo que você 
// irá ver com frequência em POO: atributos públicos e privados.

// - Público: pode ser acessado por fora da classe.
// - Privado: apenas por dentro da classe.

// Exemplo:

//-------------------------------------------------------

class Usuario {
    private nome;
}

// X Errado
const maria = new Usuario();
maria.nome = 'Nome da Maria'

//-------------------------------------------------------

// Não podemos fazer conforme acima pois o atributo nome é privado.
// Mas como podemos "setar" o nome de Maria se não temos acesso a ele ?

// Podemos usar um método público de set. Veja:

class Usuario {
    private nome;

    public setNome(nome) {
        this.nome = nome;
    }
}

// Correto
const maria = new Usuario();
maria.setNome = 'Nome da Maria'

// Temos atributos privados, métodos para 'setar' os atributos garantindo a segurança a nossa classe.
// Isso se chama Encapsulamento, e junto com a Herança, é um dos pilares da POO.

// Agora vamos falar de outro pilar. o Polimorfismo;

// Sepondo o seguinte: preciso que minhas classes, tenham uma forma de, dado o nome
// sobenome, formar seu nome completo.

// Porém na classe Professor, além de nome e sobrenome, preciso colocar a abreviação "DSc"

// *Percebe que isso seria, o mesmo método, porém, com uma implementação diferente. Veja:

class Aluno {
    nome; 

    sobrenome;

    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
}

class Professor {
    nome; 

    sobrenome;

    getNomeCompleto() {
        return 'DSc. ' + this.nome + ' ' + this.sobrenome;
    }
}

// Já que são iguais podemos herdá-los de uma classe/interface Pai e a nossa classe 
// filha vai atribuir uma nova implementação para esse método pré-definido. Ficaria assim:

interface Usuario { // classe pai
    getNomeCompleto()
}

class Aluno implements Usuario { // classe filha

    nome;

    sobrenome;

    getNomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }
}

class Professor implements Usuario { // classe filha
    nome;

    sobrenome;

    getNomeCompleto(){
        return 'DSc. ' + this.nome + ' ' + this.sobrenome;
    }
}

// -------------------------------------------------------------------------

// # Recapitulando #1:

    // Herança: Habilidade que a classe filho tem de puxar as coisas da clase Pai.
    // Encapsulamento: Tudo bonitinho dentro da classe. Apeans expomos o que é necessário, nada mais.
    // Polimorfismo: Habilidade da classe filha de "herdar" o método da classe pai e implementar ele da forma que quiser.