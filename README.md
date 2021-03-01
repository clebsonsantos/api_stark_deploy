
<p align="center">
<img src="./.github/img.png"></img>
</p>

# Api de Games para estudo

API desenvolvida com o propósito de estudar mais sobre a construção de api's utilizando o Nodejs.


## Dependencias
```
 "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1"
  }
```
## Rode a API
```
npm install
npm start

// API RODANDO EM http://localhost:45679
``` 


## Endpoints

### GET /games
Este endpoints é responsável por retornar a listagem de todos os games cadastrados na api.
#### Parâmetros
Nenhum

#### Respostas

##### OK! 200
Caso está resposta aconteça, você receberá a listagem de todos os games

Exemplo de resposta:
```
[
  {
    "id": 23,
    "title": "Call of duty MW",
    "year": 2019,
    "price": 60
  },
  {
    "id": 65,
    "title": "Sea of thieves",
    "year": 2018,
    "price": 40
  },
  {
    "id": 2,
    "title": "Minecraft",
    "year": 2012,
    "price": 20
  },
  {
    "id": 3,
    "title": "Space Invaders",
    "year": 1978,
    "price": 20
  },
  {
    "id": 5,
    "title": "Pac Man",
    "year": 1980,
    "price": 30
  },
  {
    "id": 6,
    "title": "Donkey Kong",
    "year": 1981,
    "price": 40
  },
  {
    "id": 9,
    "title": "Mario Bros",
    "year": 1985,
    "price": 10
  },
  {
    "id": 7,
    "title": "Tetris",
    "year": 1984,
    "price": 40
  }
]

```
#### Falha na autenticação! 401
Caso ocorra essa resposta, isso significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Token inválido, token expirado. 

Exemplo de resposta:
```
{
  "err": "Token inválido!"
}
```

-----
### POST /auth
Este endpoints é responsável por fazer o processo de login.
#### Parâmetros
email: Email cadastrado no sistema:

password: Senha do usuário cadastrado

```
{
	"email": "user@mail.com",
  "password": "123456"
}

```




#### Respostas

##### OK! 200
Caso está resposta aconteça, você recebera o token JWT para acessar endpoints protegidos na API.

Exemplo de resposta:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyQG1haWwuY29tIiwiaWF0IjoxNTk4NjYxMTUxLCJleHAiOjE1OTg2NjgzNTF9.nTQIplED9T8HjitZxO4iYbIxghk0j4ltkSc4EETB6wQ"
}

```
#### Falha na autenticação! 401
Caso ocorra essa resposta, isso significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Senha incorreta ou email incorreto. 

Exemplo de resposta:
```
{
  "err": "Credenciais inválidas"
}
```


