# API REST DE JOGOS


> This project is a REST API that allows you to create, update, delete and list games. A game consists of a name, a price, and the year of release. The API uses the MySQL database to store game data and Express to manage routes and requests

# ENDPOINTS
### `POST /auth`
### Parametros
Email: Email cadastrado no banco de dados
password: Senha do email cadastrado

Exemplo:
```
{
    "email": "acessoapi@gmail.com",
    "password": "node123"
}
```

### Respostas
### OK! 200  - Esse endpoint vai retornar um token para o acesso da api.

Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhY2Vzc29hcGlAZ21haWwuY29tIiwiaWF0IjoxNzA2NzM1MDE4LCJleHAiOjE3MDY5MDc4MTh9.o8y_pvGGPNsl_j13Saaq7Imn6lnKJU-lYWuwyydlI-4"
}
```
### ERROS
> ##### Bad request 400 - Erro por colocar uma requisição errada.
> ##### Unauthorized 401 - Senha incorreta
> ##### Not Found 404 - Email não encontrado.
<hr>

### `GET /games` 
### Parametros
Nenhum... 

Exemplo:
```

```

### Respostas 
### OK! 200 - Retorna uma lista de todos os jogos cadastrados no banco de dados.

Exemplo de resposta:
```
[
    {
        "id": 1,
        "name": "CS:GO",
        "price": 50,
        "year": 2023
    },
    {
        "id": 2,
        "name": "Minecraft",
        "price": 20,
        "year": 2006
    },
    {
        "id": 5,
        "name": "Crash 2",
        "price": 80,
        "year": 2016
    }
]
```
### ERROS
> ##### Bad request 400 - Token invalído.
> ##### Unauthorized 401 - Não autorizado.
<hr>

### `GET /game/:id` 
### Parametros
/id - id de algum jogo cadastrado no banco

Exemplo:
```
http://localhost:808/game/1
```

### Respostas 
### OK! 200 - Retorna dados de um jogo específico por seu id.

Exemplo de resposta:
```
    {
        "id": 1,
        "name": "CS:GO",
        "price": 50,
        "year": 2023
    }
```
### ERROS
> ##### Bad request 400 - Token invalído ou parametro invalido.
> ##### Unauthorized 401 - Não autorizado.
> ##### Not Found 404 - Jogo não encontrado.
<hr>

### `POST /game` 
### Parametros
name: Nome do jogo
price: Preço do jogo
year: Ano de lançamento do jogo

Exemplo:
```
{
    "name": "God of war",
    "price": 40,
    "year": 2021
}
```

### Respostas 
### OK! 200 - Cria um novo jogo no banco de dados. O corpo da solicitação deve conter um objeto JSON com as propriedades `name`, `price` e `year`.

Exemplo de resposta:
```
    OK! 200
```
### ERROS
> ##### Bad request 400 - Token invalído ou parametros invalidos.
> ##### Unauthorized 401 - Não autorizado.
> ##### Not Found 404 - Jogo não encontrado.
<hr>

### `DELETE /game` 
### Parametros
/game/:id - id de algum jogo cadastrado no banco

Exemplo:
```
/game/1 
```

### Respostas 
### OK! 200 - Exclui um jogo específico pelo seu ID do banco de dados.

Exemplo:
```
    OK! 200
```
### ERROS
> ##### Bad request 400 - Token invalído ou parametro invalido.
> ##### Unauthorized 401 - Não autorizado.
> ##### Not Found 404 - Jogo não encontrado.
<hr>

### `PUT /game` 
### Parametros
/game/:id - id de algum jogo cadastrado no banco
name: Nome do jogo.
price: Preço do jogo.
year: Ano de lançamento.

Exemplo:
```
/game/1
{
    "name": "Crash",
    "price": 200,
    "year": 2000
}
```

### Respostas 
### OK! 200 - Atualiza os dados de um jogo específico por seu ID. O corpo da solicitação deve conter um objeto JSON com as propriedades que você deseja alterar.

Exemplo:
```
    OK! 200
```
### ERROS
> ##### Bad request 400 - Token invalído ou parametro invalido.
> ##### Unauthorized 401 - Não autorizado.
> ##### Not Found 404 - Jogo não encontrado.
<hr>


## 💻 Pré-requisitos

- Para instalar este projeto, você precisa ter Node.js, MySQL e npm instalados em sua máquina.
