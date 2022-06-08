# Api

Uma API(Application Interface Programming) nos permite conectar várias aplicações de linguagens diferentes em uma mesma fonte fornecedora de dados.

# Entendendo o protocolo HTTP

O protocolo HTTP(Hypertext Transfer Protocol) é basicamente uma troca de mensagens de duas pontas entre o cliente e o servidor. O cliente faz uma requisição pedindo algo para o servidor, que nos retorna a resposta do que solicitamos.

# Request

Uma requisição é formada por vários blocos de informações, temos:

◉ - URL/endpoint(Identificação de recursos)
◉ - Query Params(Parâmetros na URL)
◉ - Método(Identificação de ação)
◉ - Headers(Informações adicionais)
◉ - Body(Corpo da mensagem)

# URL/endpoint e Query Params

Serve para conseguirmos identificar recursos

https://user-images.githubusercontent.com/56550632/172504409-9df8c2b9-310f-488b-a51b-e8e09069e556.png

A URL(nosso domínio) e o Endpoint são os recursos que estamos tentando acessar, nesse caso uma listagem de produtos no nosso site, os Query Params são para passarmos algumas informações adicionais, nesse caso ele pede que a API traga os produtos da página 3 ordenados de forma ascendente.

# Método

Os métodos servem para identificar qual ação nós queremos tomar em cima do recurso que identificamos no nosso Endpoint, no caso, nossos produtos.

Principais métodos:

◉ - GET: consulta de dados
◉ - POST: criação de registros
◉ - PUT: alterações de registros
◉ - DELETE: deleção de registros

No nosso cenário atual a API entenderia da seguinte maneira:

◉ - GET: retornar uma lista de produtos
◉ - POST: cadastrar um novo produto
◉ - PUT: editar um produto
◉ - DELETE: deletar um produto

# Header

Ele é usado para trocar informações adicionais entre o cliente e o servidor, existem tipos pré definidos e também podem ser customizados.

Abaixo mostro a aba de Network do inspecionar elementos do Google, aqui vemos exemplos de Headers, Status code, Método e Content-type que estão sendo recebidos e enviados nas responses e requests

https://user-images.githubusercontent.com/56550632/172504584-0e46d0d5-dd8a-4303-9a2c-2fb86f4d87c9.png

Content-Type: application/json

O Header a cima serve para identificar qual o tipo de informação que estamos mandando dentro da requisição e também qual o tipo de mensagem que está sendo retornado na resposta.

# Body

Ele só pode ser enviado para requisições nos métodos de POST e PUT e o formato dos dados que vão ser enviados são do tipo JSON(JavaScript Object Notation) ele é o mais usado na web hoje em dia pelo fato de que quase(pra não dizer todas) as linguagens de programação conseguem interpretar as informações que estão contidas dentro dele, além de conseguirmos enviar diversos tipos de dados(strings, arrays, numbers, etc).

https://user-images.githubusercontent.com/56550632/172504781-e72c19ee-a78e-4a8f-a5df-b673b7ca7e39.png

# Response

Na outra ponta da mensagem temos o servidor, que envia uma resposta formada por vários blocos de informações que contém:

◉ - Headers(Informações adicionais)
◉ - Content Type(Tipo do conteúdo da resposta)
◉ - Status code(Indica o que aconteceu com a request)
◉ - Body(Corpo da mensagem)

# Status Code

São separados por categorias, o que indica a sua categoria é o primeiro dígito

◉ - De 100-199: Respostas de informação
◉ - De 200-299: Respostas de sucesso
◉ - De 300-399: Redirecionamentos
◉ - De 400-499: Erros do cliente
◉ - De 500-599: Erros do servidor

Principais códigos que você verá por aí:

◉ - 200: OK
◉ - 201: Created
◉ - 400: Bad Request
◉ - 404: Not Found
◉ - 500: Internal Server Error

# Na prática

Agora que já sabemos o que é uma request e uma response, vamos ver um exemplo de como funcionaria na prática com o nosso exemplo de cima.

https://site.com/products

No front-end nosso objetivo é exibir uma lista de produtos, então vamos enviar um pedido para a nossa API.

Através da nossa URL, vamos acessar nosso endpoint que nos trará uma lista de produtos, e como vimos acima, o método que nos possibilita alcançar esse resultado é o GET que fará uma consulta dos dados na API.

Agora com a nossa mensagem de pedido entregue, a API irá nos retornar uma resposta.

Dentro dos Headers temos nosso status code que nesse caso retorna 200 indicando que a requisição deu certo e que conseguiu puxar e nosso content-type indicando o formato da nossa resposta que nesse caso seria text/html

<html>
  <head>
    <title>Products</title>
  </head>
  <body>
    <ul>
      <li>MacBook Air - R$6.934,00</li>
      <li>Iphone 11 - R$3.654,05</li>
      <li>AirPods - R$999,00</li>
    </ul>
  </body>
</html>

# Padrão REST

Agora que você já sabe o que é uma API e como funciona o protocolo HTTP vamos saber o que é o famoso padrão REST(Representational State Transfer), suas características são:

◉ - É um padrão para construção de API's
◉ - Usa o protocolo HTTP
◉ - Retorna uma representação de estado

# Representação de estado

Como mostrado a cima, o código HTML funciona muito bem na web, mas se quisermos utilizar essa mesma fonte de dados em outra aplicação que não entende HTML, como um aplicativo mobile, precisamos retornar uma representação desses dados, que no caso utilizaríamos o formato JSON que vimos mais a cima!

Então nossos dados ficariam mais ou menos assim:

{
"products": [
{
"name": "MacBook Air",
"price": 6934.00,
},
{
"name": "Iphone 11",
"price": 3654.05,
},
{
"name": "AirPods",
"price": 999.00,
}
]
}

# Conclusão

Procurei ser bem objetiva nesse artigo e em suas explicações, com isso espero que você tenha compreendido sobre o que é uma API e o ela faz, protocolos HTTP, Request e Response e o famoso padrão REST.
