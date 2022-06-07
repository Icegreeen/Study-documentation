// Usando Local Storage com os Hooks

//O LocalStorage é um dos mecanismos de armazenamento de um navegador. Ele permite que os usuários salvem
// dados no objeto localStorage, assim o conteúdo salvo estará disponível depois que o navegador for fechado
// e aberto novamente.

// Alguns casos de uso do localStorage seria ao adicionar um recurso de dark mode a uma aplicação,
// salvar um item de uma tarefa ou persistir os valores de um formulário, entre muitos outros.

// Criando um componente:

import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h1>Quem está assistindo ?</h1>

      <h2>{userName}</h2>

      <input
        type="text"
        placeholder="Seu nome aqui"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
      />
    </div>
  );
}

// Ao usar o hook 'useState' para controlar o componente, mantemos o estado atualizado a cada letra digitada.

// Mas, assim que atualizamos a página, os dados são limpos, o que já é esperado.
// Para persistir os dados, devemos salvá-los no localStorage.

// Utilizando o LocalStorage

// Para salvar alguma informação no armazenamento do navegador, você pode usar o método setItem().
// Este método deve receber uma chave e um valor.

localStorage.setItem("key", value);

// Para recuperar alguma informação no localStorage, você precisa usar o método getItem.
// O método getItem deve receber a chave dos dados que você deseja recuperar.

localStorage.getItem("userName");

{
  /* 
    Observação: O armazenamento do navegador aceita apenas o tipo de dado string. Portanto, para valores 
    de diferentes tipos, como objeto ou vetores devemos convertê-lo em uma string usando o JSON.stringify()
*/
}

//  Salvando o nome do usuário:

// Certifique-se de importar o hook useEffect desse jeito:

import { useEffect, useState } from "react";

// O valor de entrada é salvo no armazenamento local porque o hook useEffect que contém o método setItem
// de armazenamento é executado na primeira renderização do componente e após cada alteração do estado userName.

// Dentro do nosso useState persistimos o valor de userName na nossa aplicação com o método getItem,
// nesse ponto nosso nome de usuário já está sendo salvo mesmo que aconteça um reload da página!

const [userName, setUserName] = useState(
  localStorage.getItem("username") ?? ""
);

useEffect(() => {
  localStorage.setItem("username", userName);
}, [userName]);

// Pronto! :)
