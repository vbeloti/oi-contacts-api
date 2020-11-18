# Oi Contacts Api

- [Oi-contacts]
    - [Resumo](#resumo)
    - [Link Demonstração API](#link-demonstracao-api)
    - [Open API 3.0](#open-api-3.0)
    - [Pré Requisitos](#pre-requisitos)
    - [Instalando](#instalando)
    - [Executando o ambiente de desenvolvimento](#executando-o-ambiente-de-desenvolvimento)
    - [Recursos](#recursos)
    - [Rota /](#rota-/)
    - [Rota GET Contatos](#rota-get-contatos)
    - [Rota GET Contato](#rota-get-contato)
    - [Rota POST Contato](#rota-post-contato)
    - [Rota PUT Contato](#rota-put-contato)
    - [Rota DELETE Contato](#rota-delete-contato)
    - [Rota GET Estados](#rota-get-estados)
    - [Rota GET Cidades](#rota-get-cidades)

## Resumo

Esta é uma API construída com Typescript + NodeJS + Express + MongoDB.

## Link Demonstração API

<a href="https://oi-contacts.herokuapp.com/">https://oi-contacts.herokuapp.com/</a>

## Open API 3.0

<a href="https://oi-contacts.herokuapp.com/docs">https://oi-contacts.herokuapp.com/docs ou http://localhost:3333/docs</a>

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 14+ instalado.

Para usar o banco de dados, você precisará ter o MongoDB devidamente configurados.

1º Para configurar o banco de dados voce precisará localizar o arquivo env.example que se encontra na raiz do projeto renomeá-lo para .env e mudar a ("URL_CONNECTION") para a do seu banco de dados Mongo.

### Instalando

** Clonando o Repositório **

$ git clone https://github.com/vbeloti/oi-contacts-api

$ cd oi-contacts-api

** Instalando dependências **

$ yarn

_ou_

$ npm install

### Executando o ambiente de desenvolvimento

$ yarn dev

_ou_

$ npm run dev

## Recursos

| Recurso                    | Descrição                                                             |
|:--------------             |:----------------------------------------------------------------------|
| `GET /`                    | Retorna a mensagem Server Running                                     |
| `GET /contacts`            | Retorna uma lista de contatos                                         |
| `GET /contacts/:id`        | Retorna um contato                                                    |
| `POST /contacts`           | Cria um contato                                                       |
| `PUT /contacts/:id`        | Atualiza um contato                                                   |
| `DELETE /contacts/:id`     | Apaga um contato                                                      |
|:--------------             |:----------------------------------------------------------------------|
| `GET /ufs`                 | Retorna uma lista de estados                                          |
| `GET /ufs/:id`             | Retorna uma lista de cidades                                          |


### Rota /

- **Essa é uma rota para retornar a mensagem Server Running **

> http://localhost:3333/ ou https://oi-contacts.herokuapp.com/

| /                 |                                                                                     |
|:------------------|:------------------------------------------------------------------------------------|
| Recurso           |                         **/**                                                       |
| Metodo            |                         **GET**                                                     |
| Parametros        |                         ****                                                        |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ message:  "Fullstack Challenge 20201026!!! 🔥" }`  |
| Resposta do erro  |  **Código:** 500 **Conteúdo:** `{ error:  Internal server error }`                  |

### Rota GET Contatos

- **Essa é uma rota para retornar contatos**

> http://localhost:3333/contacts ou https://oi-contacts.herokuapp.com/contacts

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts**                                                  |
| Metodo            |                         **GET**                                                        |
| Parametros        |    **page**|**limit**|**page**|**type**|**document**|**state**|**city**:**opcional**   |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "[{contacts}]" }`                                     |
| Resposta do erro  |  **Código:** 400 **Conteúdo:** `{ "message": "There are no contacts registered." }`    |

### Rota GET Contato

- **Essa é uma rota para retornar contatos**

> http://localhost:3333/contacts/:id ou https://oi-contacts.herokuapp.com/contacts/:id

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts/:id**                                              |
| Metodo            |                         **GET**                                                        |
| Parametros        |                        **id**:**requerido**                                            |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "{contacts}" }`                                       |

### Rota POST Contato

- **Essa é uma rota para criar um contato**

> http://localhost:3333/contacts ou https://oi-contacts.herokuapp.com/contacts

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts**                                                  |
| Metodo            |                         **POST**                                                       |
| Parametros        |                                                                                        |
| Resposta Sucesso  |                         **Código:** 200                                                |
| Resposta do erro  |         **Código:** 500 **Conteúdo:** `{ error:  Internal server error }`              |

### Rota PUT Contato

- **Essa é uma rota para atualizar contatos**

> http://localhost:3333/contacts/:id ou https://oi-contacts.herokuapp.com/contacts/:id

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts/:id**                                              |
| Metodo            |                         **PUT**                                                        |
| Parametros        |                        **id**:**requerido**                                            |
| Resposta Sucesso  |                         **Código:** 200                                                |
| Resposta do erro  |         **Código:** 500 **Conteúdo:** `{ error:  Internal server error }`              |

### Rota DELETE Contato

- **Essa é uma rota para deletar um contato**

> http://localhost:3333/contacts/:id ou https://oi-contacts.herokuapp.com/contacts/:id

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts/:id**                                              |
| Metodo            |                         **DELETE**                                                     |
| Parametros        |                        **id**:**requerido**                                            |
| Resposta Sucesso  |                         **Código:** 200                                                |
| Resposta do erro  |         **Código:** 500 **Conteúdo:** `{ error:  Internal server error }`              |

### Rota GET Estados

- **Essa é uma rota para retornar estados**

> http://localhost:3333/ufs ou https://oi-contacts.herokuapp.com/ufs

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts**                                                  |
| Metodo            |                         **GET**                                                        |
| Parametros        |                                                                                        |
| Resposta Sucesso  |                 **Código:** 200 **Conteúdo:** `{ "[{uf}]" }`                           |
| Resposta do erro  |                          **Código:** 400                                               |

### Rota GET Cidades

- **Essa é uma rota para retornar cidades baseados no estado**

> http://localhost:3333/ufs/:id ou https://oi-contacts.herokuapp.com/ufs/:id

| Contacts          |                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------|
| Recurso           |                         **/contacts**                                                  |
| Metodo            |                         **GET**                                                        |
| Parametros        |                        **id**:**requerido**                                            |
| Resposta Sucesso  |                 **Código:** 200 **Conteúdo:** `{ "[{cities}]" }`                       |
| Resposta do erro  |                          **Código:** 400                                               |



